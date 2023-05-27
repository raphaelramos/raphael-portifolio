import React from "react";
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

interface IProps {
    homePageArticles: IHomePageArticles
}

const title = "Raphael Ramos"

const Home = ({
    homePageArticles: { articles, latestBlog },
}: IProps): JSX.Element => {
    return (
        <Layout title="Home" description={title}>
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
    const homePageArticles = { articles: [] }
    if (process.env.DEVTO_APIKEY) {
        const homePageArticles = await getHomePageArticles()
        return { props: { homePageArticles } }
    }

    return { props: { homePageArticles } }
}

export default Home
