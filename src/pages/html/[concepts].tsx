import React from "react";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Link from "next/link";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { folderPathFor, mdxStyling } from "utils/mdxFiles";
import { Components } from "@components/Tech/MDXComponents";
import Container from "@layouts/Container";

type Props = {
  mdxSource: any;
};

// Icons
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Concepts({ mdxSource }: Props) {
  const router = useRouter();

  const { concepts }: any = router.query;

  return (
    <Container className="pt-12 pb-20">
      <div className="flex items-center gap-1 mb-4">
        <Link
          href={"/"}
          className="px-2 py-1 text-white rounded-md bg-white/30"
        >
          <AiOutlineHome />
        </Link>
        <HiArrowLongRight />
        <div className="px-2">HTML</div>
        <HiArrowLongRight />
        <div className="px-2 text-white capitalize ">
          {concepts!.replaceAll("-", " ")}
        </div>
      </div>
      <div id="mdx" className="pb-8">
        <MDXRemote {...mdxSource} components={Components} />
      </div>
      {/* Contact */}
      <div className="pt-8 border-t-2 border-white-low-opacity">
        <h2 className="mb-1 text-3xl font-bold text-white">Contact Us</h2>
        <p className="mb-6">
          If you have any questions, you can reach out to us through these three
          platforms.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:webdeve1083@gmail.com"
            className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-primary/5 to-background-clr border-white-low-opacity hover:border-primary"
          >
            <p className="p-2 text-xl rounded-md text-primary bg-primary/10">
              <AiOutlineMail />
            </p>
            <h3 className="mt-2 text-xl text-white">Email</h3>
            <p>webdeve1083@gmail.com</p>
          </a>
          <a
            href="https://twitter.com/Ali_Developer05"
            target="_blank"
            className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-primary/5 to-background-clr border-white-low-opacity hover:border-primary"
          >
            <p className="p-2 text-xl rounded-md text-primary bg-primary/10">
              <AiOutlineTwitter />
            </p>
            <h3 className="mt-2 text-xl text-white">Twitter</h3>
            <p>@Ali_Developer05</p>
          </a>
          <a
            href="https://www.linkedin.com/in/alireza17/"
            target="_blank"
            className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-primary/5 to-background-clr border-white-low-opacity hover:border-primary"
          >
            <p className="p-2 text-xl rounded-md text-primary bg-primary/10">
              <AiFillLinkedin />
            </p>
            <h3 className="mt-2 text-xl text-white">LinkedIn</h3>
            <p>@Ali Reza</p>
          </a>
        </div>
      </div>
    </Container>
  );
}

export const getStaticPaths = () => {
  const folderPath = path.join(process.cwd(), "src/docs/html");
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
  const folderPath: any = folderPathFor("html", concepts);

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
