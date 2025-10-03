import { dateFormat } from '../../../lib/utils';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar/navbar';
import IArticle from '../../../interfaces/IArticle';
import PageHeader from "../../../components/Page-header/page-header";
import BlogDetails from "../../../components/Blog-details/blog-details";
import Footer from "../../../components/Footer/footer";
import { getAllBlogArticles, getArticleBySlug } from '../../../lib/devto';
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Enable ISR with revalidation
export const revalidate = 43200; // 12 hours

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    
    if (!article) {
        return {
            title: 'Artigo não encontrado',
        };
    }
    
    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: article.coverImage ? [article.coverImage] : [],
            type: 'article',
            publishedTime: article.publishedAt,
        },
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const articles: IArticle[] = await getAllBlogArticles();
    
    return articles.map(({ slug }) => {
        // Remove /blog/ prefix if it exists in the slug
        let cleanSlug = slug;
        if (slug.startsWith('/blog/')) {
            cleanSlug = slug.replace('/blog/', '');
        } else if (slug.startsWith('blog/')) {
            cleanSlug = slug.replace('blog/', '');
        }
        return { slug: cleanSlug };
    });
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article: IArticle | null = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const publishedDate = dateFormat(article.publishedAt);

    return (
        <>
            <div className="circle-bg">
                <div className="circle-color fixed">
                    <div className="gradient-circle"></div>
                    <div className="gradient-circle two"></div>
                </div>
            </div>
            <Navbar />
            <PageHeader title={article.title} paragraph="" />
            <p className="text-center">{publishedDate}</p>

            <div itemScope itemType="https://schema.org/BlogPosting">
                {article.coverImage && (
                    <meta itemProp="image" content={article.coverImage} />
                )}
                {article.publishedAt && (
                    <meta itemProp="datePublished" content={article.publishedAt} />
                )}
                {article.title && (
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
        </>
    );
}
