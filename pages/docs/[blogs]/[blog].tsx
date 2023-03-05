// Packages
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";

// Components + filePath/fileNames
import { pathFiles, fileNames } from "@/utils/mdxFiles";
import Container from "@/layouts/Container";
import {
  Head,
  Navbar,
  NavbarSmall,
  MDXComponents,
} from "@/components/blog-styles";

// Icons
import { AiFillEdit } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

// Types
import { SlugProps } from "@/types/Blogs";

export default function Slug({ mdxSource, docs, blogs }: SlugProps) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { blog }: any = router.query;

  const sortingArray = docs.sort((a, b) => {
    return a.frontmatter.order - b.frontmatter.order;
  });

  const findingData = docs.find((d) => {
    return d.blog.toLowerCase().includes(blog);
  });

  return (
    <>
      <NavbarSmall
        setIsOpen={setIsOpen}
        technology={blogs}
        title={findingData!.frontmatter.title}
      />

      <Container className="flex items-start gap-8 px-4 mt-24 md:px-8">
        <Navbar
          links={sortingArray}
          slug={blog}
          technology={blogs}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <div
          className="w-full p-4 pb-12 mt-12 bg-white shadow-xl rounded-2xl md:mt-0"
          id="content"
        >
          <div className="items-center hidden gap-2 mb-8 md:flex">
            <Link
              href={"/docs"}
              className="px-3 py-1 text-sm rounded-full bg-opacity-20 bg-primary"
            >
              Home
            </Link>
            <HiArrowNarrowRight />
            <Link
              href={`/docs/${blogs!.replaceAll(" ", "-").toLowerCase()}`}
              className="px-3 py-1 text-sm rounded-full bg-opacity-20 bg-slate-300"
            >
              {blogs}
            </Link>
            <HiArrowNarrowRight />
            <button className="px-3 py-1 text-sm rounded-full bg-opacity-20 bg-slate-300">
              {findingData!.frontmatter.title}
            </button>
          </div>
          <MDXRemote {...mdxSource} components={MDXComponents}></MDXRemote>
          <Link
            href={`https://github.com/AliReza1083/AniLearn.dev/tree/main/blog/css/${blog}.mdx`}
            className="flex items-center gap-2 mt-8 text-lg opacity-75 hover:opacity-100"
          >
            Edit the page <AiFillEdit />
          </Link>

          <div className="p-4 mt-8 bg-red-300 border-2 border-red-800 rounded-md">
            <p className="flex items-center gap-2 mt-0 text-sm font-bold text-red-900 md:text-lg">
              If you&apos;re interested in contributing to the project by adding
              your own blog post and sharing your knowledge, take a look at the
              Repo for more details.
            </p>
            <Link
              href={"https://github.com/AliReza1083/AniLearn.dev"}
              target="_blank"
              className="inline-block px-4 py-2 mt-3 text-sm text-white bg-red-900 rounded-md bg-back"
            >
              I want to contribute
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { blogs, blog } = context.query;

  const docs = fileNames(blogs).map((blog: any) => {
    const content = fs.readFileSync(path.join(pathFiles(blogs), blog));
    const { data } = matter(content);
    return {
      frontmatter: data,
      blog,
    };
  });

  const filePath = path.join(pathFiles(blogs), `${blog}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
    },
  });

  return {
    props: {
      mdxSource,
      docs,
      blogs,
    }, // will be passed to the page component as props
  };
}
