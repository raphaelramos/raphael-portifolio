import React, { type JSX } from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import FreelancreIntro from "../components/Freelancre-intro/freelancre-intro";
import WorksStyle from "../components/Works-style/works-style";
import AboutUs from "../components/About-us/about-us";
import Blogs from "../components/blogs/blogs";

import { GetStaticProps } from 'next'
import Layout from '../layouts/Layout'
import IHomePageArticles from '../interfaces/IHomePageArticles'
import { getHomePageArticles } from '../lib/devto'
import { CACHE_REVALIDATE_TIME } from '../lib/constants'

interface IProps {
    homePageArticles: IHomePageArticles
}

const title = "Raphael Ramos | Arquiteto de Soluções e Desenvolvedor Full Stack"
const description = "Portfolio de Raphael Ramos, especialista em desenvolvimento web, mobile e cloud."

const Home = ({
    homePageArticles: { articles },
}: IProps): JSX.Element => {
    return (
        <Layout title={title} description={description}>
            <Navbar />
            <FreelancreIntro />
            <AboutUs />
            <WorksStyle />
            <Blogs articles={articles} />
            <Footer />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const defaultProps = { articles: [], latestBlog: null }
    
    if (!process.env.DEVTO_APIKEY) {
        return { 
            props: { homePageArticles: defaultProps },
            revalidate: CACHE_REVALIDATE_TIME,
        }
    }

    const homePageArticles = await getHomePageArticles()
    return { 
        props: { homePageArticles },
        revalidate: CACHE_REVALIDATE_TIME,
    }
}

export default Home
