import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Masonry from "react-masonry-css";
import readingTime from "reading-time";

import { cssPathFiles, cssFileNames } from "@/utils/mdxFies";

import { Container, HeadingText } from "@/components";

import { FaCss3Alt } from "react-icons/fa";
import Link from "next/link";

import { BlogProps } from "@/types/Blogs";

export default function Index({ blogs }: BlogProps) {
  const sortingArray = blogs.sort((a, b) => {
    return a.frontmatter.order - b.frontmatter.order;
  });

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    768: 1,
  };

  return (
    <Container className="px-4 mt-24 md:px-8">
      <HeadingText className="flex items-center justify-center gap-2 font-black text-center text-8xl">
        CSS <FaCss3Alt className="text-primary" />
      </HeadingText>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="mt-4 my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {sortingArray.map((docs) => (
          <Link
            key={docs.frontmatter.title}
            href={`css/${docs.slug.replace(".mdx", "")}`}
            className="inline-block w-full p-4 mt-4 bg-white border-2 rounded-lg hover:border-primary hover:shadow-md"
          >
            <HeadingText className="mb-2 text-2xl font-bold">
              {docs.frontmatter.title}
            </HeadingText>
            <p>{docs.frontmatter.description}</p>
            <p className="w-full mt-2 text-sm text-right opacity-80">
              {docs.readingTime.text}
            </p>
          </Link>
        ))}
      </Masonry>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = cssFileNames.map((slug: any) => {
    const content = fs.readFileSync(path.join(cssPathFiles, slug));
    const { data, content: contents } = matter(content);
    return {
      frontmatter: data,
      slug,
      readingTime: readingTime(contents),
    };
  });

  return {
    props: {
      blogs: posts,
    },
  };
};
