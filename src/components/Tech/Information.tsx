import React from "react";

type Props = {
  content: string;
};

export default function Information({ content }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="information"></div>
  );
}
