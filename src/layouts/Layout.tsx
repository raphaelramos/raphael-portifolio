import React, { ReactNode } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

type Props = {
    children: ReactNode
    title: string
    description: string
    imageUrl?: string
}

const Layout = ({ children, title, description, imageUrl }: Props): JSX.Element => (
    <div>
        <Head>
            <link rel="stylesheet" href="/css/dark.css" />
        </Head>
        <NextSeo
            title={title}
            description={description}
            openGraph={{ title, description, images: [{
                url: imageUrl || '/img/thumb-site.png'
            }]
        }} />
        {children}
    </div>
)

export default Layout
