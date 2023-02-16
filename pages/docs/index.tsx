import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import { fileNames, pathFiles } from "@/utils/mdxFies";
import Container from "@/components/Container";

type Props = {
  data: {
    frontmatter: { title: string; author: string; category: string[] };
    slug: string;
  }[];
};

export default function index({ data }: Props) {
  console.log(data[0].frontmatter.category);
  return (
    <Container className="mt-24">
      {data.map((d) => (
        <Link
          key={d.frontmatter.title}
          href={`/docs/${d.slug.replace(".mdx", "")}`}
        >
          <p>{d.slug.replace(".mdx", "")}</p>
          <p>{d.frontmatter.author}</p>
        </Link>
      ))}
    </Container>
  );
}

export const getStaticProps = () => {
  const posts = fileNames.map((slug: any) => {
    const content = fs.readFileSync(path.join(pathFiles, slug));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug,
    };
  });

  return {
    props: {
      data: posts,
    },
  };
};
