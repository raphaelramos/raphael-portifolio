/* eslint-disable @next/next/no-img-element */
import React from 'react'
import DevToCallToAction from '../Article/DevToCallToAction'
import appData from "../../data/app.json"

const BlogDetails = ({ article }) => {
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
                                                dangerouslySetInnerHTML={{ __html: article?.html }}
                                              />
                                              <DevToCallToAction href={article?.devToURL} />
                                          </section>
                                        </div>
                                        <div className="author">
                                            <div className="author-img">
                                                <img src="/img/raphael.jpg" alt="" />
                                            </div>
                                            <div className="info">
                                                <h6>Raphael Ramos</h6>
                                                <p>
                                                    Desenvolvedor Sênior Full Stack e Mobile.
                                                </p>
                                                <p>Me acompanhe:</p>
                                                <div className="social">
                                                    <a href={appData.social.linkedin}>
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                    <a href={appData.social.github}>
                                                        <i className="fab fa-github"></i>
                                                    </a>
                                                    <a href={appData.social.twitter}>
                                                        <i className="fab fa-x-twitter"></i>
                                                    </a>
                                                    <a href={appData.social.youtube}>
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                    <a href={appData.social.instagram}>
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
