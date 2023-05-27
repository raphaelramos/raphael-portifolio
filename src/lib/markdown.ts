import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

export const sanitizeDevToMarkdown = (markdown: string): string => {
    let correctedMarkdown = ''

    // Dev.to sometimes turns "# header" into "#&nbsp;header"
    const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), 'g')
    correctedMarkdown = markdown.replace(replaceSpaceCharRegex, ' ')

    // Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
    const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g
    return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, '$& ')
}

export const convertMarkdownToHtml = (markdown: string): string => {
    const html = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .processSync(markdown)

    return String(html)
}