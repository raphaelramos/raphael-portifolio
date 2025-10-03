
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
        
        // Use fetch instead of axios for better Next.js compatibility
        const url = new URL('https://dev.to/api/articles/me')
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, String(value))
        })
        
        // Build headers properly for TypeScript
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        }
        
        if (process.env.DEVTO_APIKEY) {
            headers['api-key'] = process.env.DEVTO_APIKEY
        }
        
        const response = await fetch(url.toString(), {
            headers,
            cache: 'force-cache',
            next: { 
                revalidate: CACHE_REVALIDATE_TIME,
                tags: [DEVTO_CACHE_TAG] 
            }
        })
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        return data.map(convertDevtoResponseToArticle)
    } catch (error) {
        console.error('Failed to fetch articles from Dev.to API:', error)
        
        // If it's a rate limiting error (429) or any other error, return empty array
        // The cache will handle fallbacks and the build won't fail
        return []
    }
}

// Get all users articles from Dev.to with Next.js cache
export const getAllArticles = async (per_page = 1000): Promise<IArticle[]> => {
    try {
        return await fetchArticlesFromAPI(per_page)
    } catch (error) {
        console.error('Error fetching all articles:', error)
        return []
    }
}

export const getAllBlogArticles = async (): Promise<IArticle[]> => {
    try {
        const articles = await getAllArticles()
        return articles.filter(blogFilter)
    } catch (error) {
        console.error('Error fetching blog articles:', error)
        return []
    }
}

export const getHomePageArticles = async (): Promise<IHomePageArticles> => {
    try {
        const articles = await getAllArticles()
        const blogArticles = articles.filter(blogFilter)
        const [latestBlog] = blogArticles

        return {
            articles: blogArticles.slice(0, 4),
            latestBlog: latestBlog || null
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
