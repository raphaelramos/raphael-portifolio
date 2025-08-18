import { GetStaticPaths, GetStaticProps } from 'next'
import { dateFormat } from '../../lib/utils'
import { CACHE_REVALIDATE_TIME } from '../../lib/constants'
import { ParsedUrlQuery } from 'querystring'

import Layout from '../../layouts/Layout'
import Navbar from '../../components/Navbar/navbar'
import IArticle from '../../interfaces/IArticle'
import PageHeader from "../../components/Page-header/page-header";
import BlogDetails from "../../components/Blog-details/blog-details";
import Footer from "../../components/Footer/footer";
import { getAllBlogArticles, getArticleBySlug } from '../../lib/devto'

import type { JSX } from "react";

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

    <div itemScope itemType="https://schema.org/BlogPosting">
      {article?.coverImage && (
        <meta itemProp="image" content={article.coverImage} />
      )}
      {article?.publishedAt && (
        <meta itemProp="datePublished" content={article.publishedAt} />
      )}
      {article?.title && (
        <meta itemProp="headline" content={article.title} />
      )}

      <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Raphael Ramos" />
        <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
          <meta itemProp="url" content="/img/raphael.jpg" />
        </div>
      </div>
      
      <BlogDetails article={article} />
    </div>
    <Footer />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams
    
    try {
        // The slug from params should not have /blog/ prefix since it's already in the route
        const article: IArticle | null = await getArticleBySlug(slug)

        if (!article) {
            return { notFound: true }
        }

        const publishedDate = dateFormat(article.publishedAt)
        return { 
            props: { article, publishedDate },
            revalidate: CACHE_REVALIDATE_TIME,
        }
    } catch (error) {
        console.error('Error fetching article:', error)
        return { notFound: true }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const articles: IArticle[] = await getAllBlogArticles()
        const paths = articles.map(({ slug }) => {
            // Remove /blog/ prefix if it exists in the slug
            let cleanSlug = slug
            if (slug.startsWith('/blog/')) {
                cleanSlug = slug.replace('/blog/', '')
            } else if (slug.startsWith('blog/')) {
                cleanSlug = slug.replace('blog/', '')
            }
            return { params: { slug: cleanSlug } }
        })
        
        return { paths, fallback: 'blocking' }
    } catch (error) {
        console.error('Error fetching articles for static paths:', error)
        return { paths: [], fallback: 'blocking' }
    }
}

export default ArticlePage
