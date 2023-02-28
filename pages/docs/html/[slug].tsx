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
import { htmlPathFiles, htmlFileNames } from "@/utils/mdxFiles";
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

export default function Slug({ data, mdxSource }: SlugProps) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { slug }: any = router.query;

  const sortingArray = data.sort((a, b) => {
    return a.frontmatter.order - b.frontmatter.order;
  });

  const findingData = data.find((d) => {
    return d.slug.toLowerCase().includes(slug);
  });

  return (
    <>
      <Head title={findingData!.frontmatter.title} content={findingData!} />

      <NavbarSmall
        setIsOpen={setIsOpen}
        technology="HTML"
        title={findingData!.frontmatter.title}
      />

      <Container className="flex items-start gap-8 px-4 mt-24 md:px-8">
        <Navbar
          links={sortingArray}
          slug={slug}
          technology="HTML"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <div
          className="w-full p-4 pb-24 mt-12 bg-white shadow-xl rounded-2xl md:mt-0"
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
              href={"/docs/html"}
              className="px-3 py-1 text-sm rounded-full bg-opacity-20 bg-slate-300"
            >
              HTML
            </Link>
            <HiArrowNarrowRight />
            <button className="px-3 py-1 text-sm rounded-full bg-opacity-20 bg-slate-300">
              {findingData!.frontmatter.title}
            </button>
          </div>
          <MDXRemote {...mdxSource} components={MDXComponents}></MDXRemote>
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

export const getStaticProps = async ({ params }: any) => {
  const posts = htmlFileNames.map((slug: any) => {
    const content = fs.readFileSync(path.join(htmlPathFiles, slug));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug,
    };
  });

  const { slug } = params;
  const filePath = path.join(htmlPathFiles, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
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
  const postsPath = htmlFileNames.map((slug: any) => {
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
