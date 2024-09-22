import React from "react";

import { allContents } from "contentlayer/generated";
import { Mdx } from "@/components/MDXContent";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { docs: string[] };
};

export default function DocsPage({ params: { docs } }: Props) {
  const findingGoal = allContents.find(
    (post) => `/${docs.join("/")}` === post.slug
  );

  console.log(findingGoal);

  return findingGoal ? (
    <>
      {findingGoal.links?.credit && (
        <a target="_blank" href={findingGoal.links.credit.url}>
          <Badge className="mb-4">{findingGoal.links.credit.name}</Badge>
        </a>
      )}
      <Mdx code={findingGoal.body.code} />
    </>
  ) : (
    <div>NO DOCS</div>
  );
}
