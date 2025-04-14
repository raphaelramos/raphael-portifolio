/* eslint-disable @next/next/no-img-element */
import React from 'react'
import DevToCallToAction from '../Article/DevToCallToAction'
import appData from "../../data/app.json"
import IArticle from '@/interfaces/IArticle'

interface BlogDetailsProps {
  article: IArticle;
}

const BlogDetails = ({ article }: BlogDetailsProps) => {
    return (
        <section className="blog-pg single section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="post">
                            <div className="content pt-60">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="cont">
                                            <section>
                                              <article
                                                itemProp="articleBody"
                                                dangerouslySetInnerHTML={{ __html: article?.html }}
                                              />
                                              <DevToCallToAction href={article?.devToURL} />
                                          </section>
                                        </div>
                                        <div className="author" itemProp="author" itemScope itemType="https://schema.org/Person">
                                            <div className="author-img">
                                                <img src="/img/raphael.jpg" alt="Raphael Ramos" itemProp="image" />
                                            </div>
                                            <div className="info">
                                                <h6 itemProp="name">Raphael Ramos</h6>
                                                <p itemProp="description">
                                                    Arquiteto de soluções e Desenvolvedor.
                                                </p>
                                                <p>Me acompanhe:</p>
                                                <div className="social">
                                                    <a href={appData.social.linkedin} itemProp="sameAs">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                    <a href={appData.social.github} itemProp="sameAs">
                                                        <i className="fab fa-github"></i>
                                                    </a>
                                                    <a href={appData.social.twitter} itemProp="sameAs">
                                                        <i className="fab fa-x-twitter"></i>
                                                    </a>
                                                    <a href={appData.social.youtube} itemProp="sameAs">
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                    <a href={appData.social.instagram} itemProp="sameAs">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetails
