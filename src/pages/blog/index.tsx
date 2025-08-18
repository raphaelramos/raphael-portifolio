import Layout from '../../layouts/Layout'
import ArticleCard from '../../components/Article/ArticleCard'
import IArticle from '../../interfaces/IArticle'
import { getAllBlogArticles } from '../../lib/devto'
import { CACHE_REVALIDATE_TIME } from '../../lib/constants'
import { GetStaticProps } from 'next'
import Navbar from '../../components/Navbar/navbar'
import PageHeader from '../../components/Page-header/page-header'
import Footer from "../../components/Footer/footer";

import type { JSX } from "react";

interface IProps {
    articles: IArticle[]
}

const title = 'Blog de Tecnologia | Raphael Ramos - Angular, React, Node e Cloud'
const description = 'Artigos sobre desenvolvimento web, mobile apps, arquitetura de software e tecnologias como Angular, React, Node.js, serverless e cloud computing.'

const BlogPage = ({ articles }: IProps): JSX.Element => (
    <Layout title={title} description={description}>
        <div className="circle-bg">
            <div className="circle-color fixed">
            <div className="gradient-circle"></div>
            <div className="gradient-circle two"></div>
            </div>
        </div>
        <Navbar />
        <PageHeader
            title="Blog"
            paragraph="Compartilho sobre as tecnologias que tenho estudado e trabalhado"
        />

        <section className="blog-pg section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="posts">
                            <div className="row">
                                {articles.map(({ title, description, publishedAt, tags, canonical, coverImage }) => (
                                    <div key={title} className="col-lg-6 col-md-6 mb-5">
                                        <div className="article-card-wrapper h-100">
                                            <ArticleCard
                                                title={title}
                                                coverImage={coverImage}
                                                description={description}
                                                date={publishedAt}
                                                tags={tags}
                                                canonical={canonical}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    try {
        const articles = await getAllBlogArticles()
        return { 
            props: { articles },
            revalidate: CACHE_REVALIDATE_TIME,
        }
    } catch (error) {
        console.error('Error fetching blog articles:', error)
        return { 
            props: { articles: [] },
            revalidate: CACHE_REVALIDATE_TIME,
        }
    }
}

export default BlogPage
