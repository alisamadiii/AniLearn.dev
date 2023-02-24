import React from "react";

import Docs from "@/components/Docs";
import HeadTags from "@/layouts/Head";

type Props = {};

export default function Index() {
  return (
    <>
      <HeadTags
        title="Docs"
        banner="https://i.ibb.co/n79vrKr/Documentation.png"
        description="Learn by reading Docs"
      />
      <div className="mt-32">
        <Docs headingText="Documentations" />
      </div>
    </>
  );
}
