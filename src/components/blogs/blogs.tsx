import Link from "next/link";
import React from "react";
import HomeArticleCard from '../Article/HomeArticleCard'
import IArticle from '../../interfaces/IArticle'

import type { JSX } from "react";

interface IProps {
    articles: IArticle[]
}

const Blogs = React.memo(({ articles }: IProps): JSX.Element => (
  <section className="blog-list section-padding sub-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="head md-mb50">
            <h6 className="back-color">Últimos artigos</h6>
            <h3>Blog</h3>
            <p>
            Compartilho sobre as tecnologias que tenho estudado e trabalhado.
            </p>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-1">
          {articles.map(({ title, description, publishedAt, tags, canonical, coverImage }, index) => (
              <HomeArticleCard
                  key={`${canonical}-${index}`}
                  title={title}
                  coverImage={coverImage}
                  description={description}
                  date={publishedAt}
                  tags={tags}
                  canonical={canonical}
              />
          ))}
        </div>
        <div className="col-lg-12 head md-mb50">
          <Link href="/blog">
            <span>Mais postagens</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
))

Blogs.displayName = 'Blogs';

export default Blogs
