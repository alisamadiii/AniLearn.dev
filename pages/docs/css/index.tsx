import { cssPathFiles, cssFileNames } from "@/utils/mdxFies";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components";
import Navbar from "@/components/blog-styles/Navbar";
import { BlogProps } from "@/types/Blogs";

export default function Index({ blogs }: BlogProps) {
  const sortingArray = blogs.sort((a, b) => {
    return a.frontmatter.order - b.frontmatter.order;
  });

  console.log(sortingArray);

  return (
    <Container className="mt-24">
      <Navbar links={sortingArray} technology="CSS" />
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = cssFileNames.map((slug: any) => {
    const content = fs.readFileSync(path.join(cssPathFiles, slug));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug,
    };
  });

  return {
    props: {
      blogs: posts,
    },
  };
};
