import React from "react";

import { allContents } from "contentlayer/generated";
import { Mdx } from "@/components/MDXContent";

type Props = {
  params: { docs: string[] };
};

export default function DocsPage({ params: { docs } }: Props) {
  const findingGoal = allContents.find(
    (post) => `/${docs.join("/")}` === post.slug
  );

  return findingGoal ? (
    <Mdx code={findingGoal.body.code} />
  ) : (
    <div>NO DOCS</div>
  );
}
