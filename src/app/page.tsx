import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import FreelancreIntro from "../components/Freelancre-intro/freelancre-intro";
import WorksStyle from "../components/Works-style/works-style";
import AboutUs from "../components/About-us/about-us";
import Blogs from "../components/blogs/blogs";
import { getHomePageArticles } from '../lib/devto';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raphael Ramos | Arquiteto de Soluções e Desenvolvedor Full Stack",
  description: "Portfolio de Raphael Ramos, especialista em desenvolvimento web, mobile e cloud.",
};

// Enable ISR with revalidation
export const revalidate = 43200; // 12 hours

export default async function Home() {
    const { articles } = await getHomePageArticles();
    
    return (
        <>
            <Navbar />
            <FreelancreIntro />
            <AboutUs />
            <WorksStyle />
            <Blogs articles={articles} />
            <Footer />
        </>
    );
}
