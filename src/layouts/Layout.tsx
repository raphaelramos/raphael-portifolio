import React, { ReactNode, type JSX } from "react";
import { NextSeo } from "next-seo";
import schemaData from "../data/schema.json";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  imageUrl?: string;
};

const Layout = ({
  children,
  title,
  description,
  imageUrl,
}: Props): JSX.Element => (
  <div>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: imageUrl || "/img/thumb-site.png",
          },
        ],
      }}
    />
    {children}
  </div>
);

export default Layout;
