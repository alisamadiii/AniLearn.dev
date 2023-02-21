import { cssPathFiles, cssFileNames } from "@/utils/mdxFies";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components";
import Link from "next/link";

type Props = {
  blogs: {
    frontmatter: {
      title: string;
      category: string[];
      author: string;
      order: number;
    };
    slug: string;
  }[];
};

export default function Index({ blogs }: Props) {
  const sortingArray = blogs.sort((a, b) => {
    return a.frontmatter.order - b.frontmatter.order;
  });

  console.log(sortingArray);

  return (
    <Container className="mt-24">
      <nav
        className={`fixed bg-white md:bg-transparent md:sticky top-0 md:top-24 left-0 h-screen md:h-auto z-50  duration-200`}
      >
        <div className="w-64 px-4 mt-4">
          <h1 className="font-medium">CSS</h1>
          {sortingArray.map((d) => (
            <Link
              key={d.frontmatter.title}
              href={`css/${d.slug.replace(".mdx", "")}`}
            >
              <p
                className={`px-4 py-1 mt-2 border-l-2 hover:border-primary capitalize`}
              >
                {d.slug.replace(".mdx", "").replaceAll("-", " ")}
              </p>
            </Link>
          ))}
        </div>
      </nav>
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
