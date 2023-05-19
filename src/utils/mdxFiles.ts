import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import path from "path";

export const mdxStyling = (techContent: any) => {
  return serialize(techContent, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeCodeTitles,
        // [rehypePrettyCode],
        rehypePrism,
      ],
      format: "mdx",
    },
    parseFrontmatter: false,
  });
};

export const folderPathFor: (a: "html" | "css", b: string) => void = (
  tech,
  concepts
) => {
  return path.join(process.cwd(), `src/docs/${tech}/${concepts}.mdx`);
};
