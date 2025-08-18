
import axios, { AxiosResponse } from 'axios'
import { unstable_cache } from 'next/cache'
import IArticle from '../interfaces/IArticle'
import IHomePageArticles from '../interfaces/IHomePageArticles'
import { convertMarkdownToHtml, sanitizeDevToMarkdown } from './markdown'
import { CACHE_REVALIDATE_TIME, DEVTO_CACHE_TAG } from './constants'
import appData from "../data/app.json";
import { DevtoApiResponse } from '../interfaces/IDevtoApiResponse';

const username = appData.devtoUsername
const blogURL = appData.blogURL
const portfolioURL = appData.portfolioURL

export const convertCanonicalURLToRelative = (canonical: string): string => {
    if (canonical.startsWith(portfolioURL)) {
        return canonical.replace(portfolioURL, '')
    }
    return canonical.replace(blogURL, '')
}


const convertDevtoResponseToArticle = (data: DevtoApiResponse): IArticle => {
    const slug = convertCanonicalURLToRelative(data.canonical_url)
    const markdown = sanitizeDevToMarkdown(data.body_markdown)
    const html = convertMarkdownToHtml(markdown)

    return {
        id: data.id,
        title: data.title,
        description: data.description,
        publishedAt: data.published_at,
        devToSlug: data.slug,
        devToPath: data.path,
        devToURL: data.url,
        commentsCount: data.comments_count,
        publicReactionsCount: data.public_reactions_count,
        positiveReactionsCount: data.positive_reactions_count,
        coverImage: data.cover_image ?? '',
        tags: data.tag_list,
        canonical: data.canonical_url,
        collectionId: data.collection_id || -1,
        slug,
        markdown,
        html,
    }
}

const blogFilter = (article: IArticle): boolean => article.canonical.startsWith(blogURL)

const fetchArticlesFromAPI = async (per_page = 1000): Promise<IArticle[]> => {
    try {
        const params = { username, per_page: per_page }
        const headers = process.env.DEVTO_APIKEY ? { 'api-key': process.env.DEVTO_APIKEY } : {}
        
        const { data }: AxiosResponse = await axios.get(`https://dev.to/api/articles/me`, {
            params,
            headers,
            timeout: 15000, // Increased timeout to 15 seconds
        })
        
        return data.map(convertDevtoResponseToArticle)
    } catch (error) {
        console.error('Failed to fetch articles from Dev.to API:', error)
        
        // If it's a rate limiting error (429) or any other error, return empty array
        // The cache will handle fallbacks and the build won't fail
        if (axios.isAxiosError(error) && error.response?.status === 429) {
            console.warn('Dev.to API rate limit reached, returning empty array for build to continue')
        }
        
        return []
    }
}

// Single cached function to fetch all articles from Dev.to API
const getCachedArticles = unstable_cache(
    async (): Promise<IArticle[]> => {
        try {
            return await fetchArticlesFromAPI()
        } catch (error) {
            console.error('Error in getCachedArticles:', error)
            return []
        }
    },
    ['devto-articles'],
    {
        revalidate: CACHE_REVALIDATE_TIME,
        tags: [DEVTO_CACHE_TAG],
    }
)

// Get all users articles from Dev.to with Next.js cache
export const getAllArticles = async (per_page = 1000): Promise<IArticle[]> => {
    try {
        const articles = await getCachedArticles()
        return per_page === 1000 ? articles : articles.slice(0, per_page)
    } catch (error) {
        console.error('Error fetching all articles:', error)
        return []
    }
}

export const getAllBlogArticles = async (): Promise<IArticle[]> => {
    try {
        const articles = await getCachedArticles()
        return articles.filter(blogFilter)
    } catch (error) {
        console.error('Error fetching blog articles:', error)
        return []
    }
}

export const getHomePageArticles = async (): Promise<IHomePageArticles> => {
    try {
        const articles = await getCachedArticles()
        const blogArticles = articles.filter(blogFilter)
        const latestBlog = blogArticles.length > 0 ? blogArticles[0] : null
        
        return {
            articles: articles.slice(0, 4),
            latestBlog
        }
    } catch (error) {
        console.error('Error fetching homepage articles:', error)
        return {
            articles: [],
            latestBlog: null
        }
    }
}

// Gets an article by slug from cached blog articles
export const getArticleBySlug = async (slug: string): Promise<IArticle | null> => {
    const articles = await getAllBlogArticles()
    
    // Normalize slug - ensure it starts with /blog/
    const normalizedSlug = slug.startsWith('/blog/') ? slug : `/blog/${slug}`
    
    return articles.find((article) => article.slug === normalizedSlug) || null
}
