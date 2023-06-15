import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string | null;
};

export default function MetaTag({ title, description, image }: Props) {
  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content="anilearn.dev"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image || "https://i.ibb.co/ZxTJ1rm/header.png"}
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:domain"
        content="anilearn.dev"
      />
      <meta
        property="twitter:url"
        content="anilearn.dev"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image || "https://i.ibb.co/ZxTJ1rm/header.png"}
      />
      <link
        rel="icon"
        href="/Logo.svg"
      />
    </Head>
  );
}
