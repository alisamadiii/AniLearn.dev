import { defineDocumentType, makeSource } from "contentlayer/source-files";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const LearningConcept = defineDocumentType(() => ({
  name: "Learn",
  filePathPattern: "learn/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    created_at: {
      type: "date",
      required: true,
    },
    level: {
      type: "string",
      required: false,
    },
    link_content: {
      type: "string",
      required: false,
    },
    completed: {
      type: "boolean",
      required: false,
    },
    contributor: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./contents",
  documentTypes: [LearningConcept],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
