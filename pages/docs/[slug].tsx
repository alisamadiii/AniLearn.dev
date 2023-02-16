import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

import Container from "@/components/Container";
import { fileNames, pathFiles } from "@/utils/mdxFies";

import Heading from "@/components/blog-styles/Heading";
import Text from "@/components/blog-styles/Text";

type Props = {
  data: {
    frontmatter: { title: string; author: string; category: string[] };
    slug: string;
  }[];
  mdxSource: any;
};

const components = {
  h1: (props: any) => <Heading {...props}></Heading>,
  p: (props: any) => <Text {...props}></Text>,
};

export default function Slug({ data, mdxSource }: Props) {
  return (
    <Container className="mt-24 flex gap-8 px-4 md:px-8">
      <nav className="w-96">
        {data.map((d) => (
          <Link
            key={d.frontmatter.title}
            href={`/docs/${d.slug.replace(".mdx", "")}`}
          >
            <p>{d.slug.replace(".mdx", "")}</p>
          </Link>
        ))}
      </nav>
      <div>
        <MDXRemote {...mdxSource} components={components}></MDXRemote>
      </div>
    </Container>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const posts = fileNames.map((slug: any) => {
    const content = fs.readFileSync(path.join(pathFiles, slug));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug,
    };
  });

  const { slug } = params;
  const filePath = path.join(pathFiles, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    props: {
      data: posts,
      mdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      slug,
    },
  };
};

export async function getStaticPaths() {
  const postsPath = fileNames.map((slug: any) => {
    return {
      params: {
        slug: slug.replace(/\.mdx?$/, ""),
      },
    };
  });
  return {
    paths: postsPath,
    fallback: false,
  };
}
