import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import { dateFormat } from '../../lib/utils'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'

import Layout from '../../layouts/Layout'
import Navbar from '../../components/Navbar/navbar'
import IArticle from '../../interfaces/IArticle'
import PageHeader from "../../components/Page-header/page-header";
import BlogDetails from "../../components/Blog-details/blog-details";
import Footer from "../../components/Footer/footer";
import { getAllBlogArticles, getArticleFromCache } from '../../lib/devto'

const cacheFile = '.devto-articles-cache.json'

interface IProps {
    article: IArticle
    publishedDate: string
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

const ArticlePage = ({ article, publishedDate }: IProps): JSX.Element => (
  <Layout
    title={article?.title}
    description={article?.description}
    imageUrl={article?.coverImage}
  >
    <div className="circle-bg">
      <div className="circle-color fixed">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </div>
    <Navbar />
    <PageHeader title={article?.title} paragraph="" />
    <p className="text-center">{publishedDate}</p>

    <BlogDetails article={article} />
    <Footer />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams

    // Read cache and parse to object
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile), 'utf-8')
    const cache = JSON.parse(cacheContents)

    // Fetch the article from the cache
    const article: IArticle = getArticleFromCache(cache, `/blog/${slug}`) ?? null

    const publishedDate = dateFormat(article?.publishedAt)

    return { props: { article, publishedDate } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the published articles and cache them for use in getStaticProps
    const articles: IArticle[] = await getAllBlogArticles()

    // Save article data to cache file
    fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(articles))

    // Get the paths we want to pre-render based on posts
    const paths = articles.map(({ slug }) => {
        return {
            params: { slug },
        }
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

export default ArticlePage
