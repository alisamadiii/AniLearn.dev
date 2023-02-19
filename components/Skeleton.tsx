import React from "react";
import Container from "./Container";

type Props = {
  type: "testimonial" | "contents";
};

export default function Skeleton({ type }: Props) {
  if (type == "testimonial") {
    return (
      <Container className="flex flex-wrap gap-4">
        {[...Array(9).keys()].map((_, i) => (
          <div
            key={i}
            className="bg-[#e5e5e5] h-36 basis-[300px] grow rounded-lg animate-pulse"
          ></div>
        ))}
      </Container>
    );
  }

  return <h1>Skeleton</h1>;
}
