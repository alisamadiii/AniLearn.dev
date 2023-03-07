import { fileNames, pathFiles } from "@/utils/mdxFiles";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Container, HeadingText } from "@/components";
import Masonry from "react-masonry-css";
import Link from "next/link";
import { useRouter } from "next/router";
import formatDistance from "date-fns/formatDistance";

import { BlogProps } from "@/types/Blogs";
import HeadTags from "@/layouts/Head";

export default function Index({ data }: BlogProps) {
  const router = useRouter();
  const { blogs } = router.query;

  const sortingArray = data.sort((a, b) => {
    return a.frontmatter.order - b.frontmatter.order;
  });

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    768: 1,
  };

  const timeFormat = (date: string) => {
    return formatDistance(new Date(date), new Date());
  };

  return (
    <>
      <HeadTags
        title={blogs}
        description="Discover the valuable insights and information you need to succeed by checking out our comprehensive documentation today!"
        banner="https://i.ibb.co/tqgtB1B/Documentation.png"
      />
      <Container className="px-4 mt-24 md:px-8">
        <HeadingText className="flex items-center justify-center gap-2 text-3xl font-black text-center md:text-5xl lg:text-8xl">
          {blogs}
        </HeadingText>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="mt-4 my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {sortingArray.map((docs) => (
            <Link
              key={docs.frontmatter.title}
              href={`${blogs}/${docs.blog.replace(".mdx", "")}`}
              className="inline-block w-full p-4 mt-4 bg-white border-2 rounded-lg hover:border-primary hover:shadow-md"
            >
              <HeadingText className="mb-2 text-2xl font-bold">
                {docs.frontmatter.title}
              </HeadingText>
              <p>{docs.frontmatter.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4 text-xs">
                <p>
                  by{" "}
                  <span className="italic font-medium">
                    {docs.frontmatter.author}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <p>{timeFormat(docs.frontmatter.date)}</p>
                  <p className="px-2 py-1 font-medium text-white rounded-md bg-primary">
                    {docs.readingTime.text}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Masonry>
      </Container>
    </>
  );
}

const routes = ["html", "css", "js", "open-source", "optional"];

export const getStaticProps = ({ params }: any) => {
  const posts = fileNames(params.blogs).map((blog: any) => {
    const content = fs.readFileSync(path.join(pathFiles(params.blogs), blog));
    const { data, content: contents } = matter(content);
    return {
      frontmatter: data,
      blog,
      readingTime: readingTime(contents),
    };
  });
  return {
    props: {
      data: posts,
    },
  };
};

export const getStaticPaths = () => {
  const blogPaths = routes.map((route) => {
    return {
      params: {
        blogs: route,
      },
    };
  });

  return {
    paths: blogPaths,
    fallback: false,
  };
};
