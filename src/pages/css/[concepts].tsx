import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { folderPathFor, mdxStyling } from "utils/mdxFiles";
import { Components } from "@components/Tech/MDXComponents";
import Container from "@layouts/Container";

type Props = {
  data: {
    order: number;
    tech: string;
    title: string;
  };
  mdxSource: any;
};

// Icons
import ExtraInformation from "@components/ExtraInformation";
import MetaTag from "@layouts/MetaTag";

export default function Concepts({ data, mdxSource }: Props) {
  return (
    <>
      <MetaTag
        title={data.title}
        description=""
        image={"https://i.ibb.co/ZxTJ1rm/header.png"}
      />
      <Container className="pt-12 pb-20">
        <div id="mdx" className="pb-8">
          <MDXRemote {...mdxSource} components={Components} />
        </div>
        {/* Contact */}
        <ExtraInformation />
      </Container>
    </>
  );
}

export const getStaticPaths = () => {
  const folderPath = path.join(process.cwd(), "src/docs/css");
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

  return {
    props: {
      data,
      mdxSource,
    },
  };
};
