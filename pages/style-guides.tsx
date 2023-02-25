import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";

import { MDXComponents } from "@/components/blog-styles";
import { Container } from "@/components";
import HeadTags from "@/layouts/Head";

type Props = {
  mdxSource: any;
};

export default function StyleGuides({ mdxSource }: Props) {
  return (
    <>
      <HeadTags
        title="Style Guides"
        banner="https://i.ibb.co/pLxh03q/style-guides.png"
        description="Make your blog beautiful by following these style guides."
      />
      <div className="px-4 mt-24 md:px-8" id="content">
        <Container>
          <MDXRemote {...mdxSource} components={MDXComponents}></MDXRemote>
        </Container>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const pathFile = path.join(process.cwd(), "blog");
  const readFile = fs.readFileSync(path.join(pathFile, "style-guides.mdx"));
  const { content } = matter(readFile);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
    },
  });
  return {
    props: {
      mdxSource,
    },
  };
};
