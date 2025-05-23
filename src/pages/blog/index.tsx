import Layout from '../../layouts/Layout'
import ArticleCard from '../../components/Article/ArticleCard'
import IArticle from '../../interfaces/IArticle'
import { getAllBlogArticles } from '../../lib/devto'
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
                    <div className="col-lg-11">
                        <div className="posts">
                            {articles.map(({ title, description, publishedAt, tags, canonical, coverImage }) => (
                                <ArticleCard
                                    key={title}
                                    title={title}
                                    coverImage={coverImage}
                                    description={description}
                                    date={publishedAt}
                                    tags={tags}
                                    canonical={canonical}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    // Get all the articles that have a canonical URL pointed to your blog
    const articles = await getAllBlogArticles()

    // Pass articles to the page via props
    return { props: { articles } }
}

export default BlogPage
