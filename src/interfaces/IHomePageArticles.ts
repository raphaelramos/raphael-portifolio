import IArticle from './IArticle'

interface IHomePageArticles {
    articles: IArticle[],
    latestBlog: IArticle | null
}

export default IHomePageArticles
