import React, { useState, useEffect } from "react";
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
import { AiOutlineMenu } from "react-icons/ai";

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
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState<any[]>([]);
  const [html, setHtml] = useState<any[]>([]);

  useEffect(() => {
    const filteringFirst = data.filter((h) => {
      return h.frontmatter.category.includes("first");
    });
    setFirst(filteringFirst);
  }, []);

  useEffect(() => {
    const filteringHTML = data.filter((h) => {
      return h.frontmatter.category.includes("html");
    });
    setHtml(filteringHTML);
  }, []);

  return (
    <Container className="mt-24 flex items-start gap-8 px-4 md:px-8">
      <nav
        className={`fixed bg-white md:bg-transparent md:sticky top-0 left-0 h-screen md:h-auto z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } duration-200`}
      >
        <div className="w-64">
          {first.map((d) => (
            <Link
              key={d.frontmatter.title}
              href={`/docs/${d.slug.replace(".mdx", "")}`}
            >
              <p className="p-4">{d.slug.replace(".mdx", "")}</p>
            </Link>
          ))}
        </div>
        <div className="w-64 px-4">
          <h1 className="font-medium">HTML</h1>
          {html.map((d) => (
            <Link
              key={d.frontmatter.title}
              href={`/docs/${d.slug.replace(".mdx", "")}`}
            >
              <p className="px-4 py-1 mt-2 border-l-2 border-transparent hover:border-primary">
                {d.slug.replace(".mdx", "")}
              </p>
            </Link>
          ))}
        </div>
      </nav>
      <div
        className={`md:hidden bg-black text-white p-3 rounded-full fixed bottom-4 left-4 ${
          isOpen && "translate-x-64"
        } duration-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu />
      </div>
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
