import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";

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
