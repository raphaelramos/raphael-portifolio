import ArticleCard from '../../components/Article/ArticleCard';
import IArticle from '../../interfaces/IArticle';
import { getAllBlogArticles } from '../../lib/devto';
import Navbar from '../../components/Navbar/navbar';
import PageHeader from '../../components/Page-header/page-header';
import Footer from "../../components/Footer/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog de Tecnologia | Raphael Ramos - Angular, React, Node e Cloud',
    description: 'Artigos sobre desenvolvimento web, mobile apps, arquitetura de software e tecnologias como Angular, React, Node.js, serverless e cloud computing.',
};

// Enable ISR with revalidation
export const revalidate = 43200; // 12 hours

export default async function BlogPage() {
    const articles: IArticle[] = await getAllBlogArticles();
    
    return (
        <>
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
                                    {articles.map(({ title, description, publishedAt, tags, canonical, coverImage }, index) => (
                                        <div key={`${canonical}-${index}`} className="col-lg-6 col-md-6 mb-5">
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
        </>
    );
}
