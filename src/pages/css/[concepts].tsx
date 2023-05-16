import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { folderPathFor, mdxStyling } from "mdxFiles";

type Props = {
  mdxSource: any;
};

export default function Concepts({ mdxSource }: Props) {
  return (
    <div>
      <MDXRemote {...mdxSource}></MDXRemote>
    </div>
  );
}

export const getStaticPaths = () => {
  const folderPath = path.join(process.cwd(), "src/tech/css");
  const fileNames = fs.readdirSync(folderPath);
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        concepts: fileName.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const { concepts } = params;
  const folderPath: any = folderPathFor("css", concepts);

  const content = fs.readFileSync(folderPath);
  const { data, content: techContent } = matter(content);
  const mdxSource = await mdxStyling(techContent);

  console.log(data);

  return {
    props: {
      data,
      mdxSource,
    },
  };
};
