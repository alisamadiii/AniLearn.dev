import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  content: {
    frontmatter: {
      title: string;
      category: string[];
      author: string;
      order: number;
      description: string;
      edit: string;
    };
    slug: string;
  };
};

export default function HeadTags({ title, content }: Props) {
  return (
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* <!-- HTML Meta Tags --> */}
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <meta name="description" content={content.frontmatter.description} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://www.anilearn.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AniLearn" />
      <meta
        property="og:description"
        content={content.frontmatter.description}
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/Jt33tGq/Mac-Book-Pro-14-1.png"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="anilearn.dev" />
      <meta property="twitter:url" content="https://www.anilearn.dev/" />
      <meta name="twitter:title" content="AniLearn" />
      <meta
        name="twitter:description"
        content={content.frontmatter.description}
      />
      <meta
        name="twitter:image"
        content="https://i.ibb.co/Jt33tGq/Mac-Book-Pro-14-1.png"
      />
    </Head>
  );
}
