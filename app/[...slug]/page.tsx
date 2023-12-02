import React from "react";

import { allContents } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/MdxComponents";

interface Props {
  params: {
    slug: string[];
  };
}

export default function page({ params }: Props) {
  const currentSlug = `/${params.slug.join("/")}`;

  const findingContents = allContents.find(
    (content) => content.slug === currentSlug
  );

  if (findingContents === undefined || findingContents === null) {
    return notFound();
  }

  return (
    <div>
      <div>
        <div className="flex items-center gap-2 text-xs">
          {findingContents.slugAsParams.split("/").map((text, index) => (
            <>
              <p className="[&:nth-of-type(1)]:text-paragraph">
                {text !== "javascript" && index === 0
                  ? text.toUpperCase()
                  : text}
              </p>
              {index < findingContents.slugAsParams.split("/").length - 1 && (
                <svg
                  width="4"
                  height="6"
                  viewBox="0 0 4 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.31103 2.81308L0.433451 0.0713045C0.385437 0.0255335 0.321648 0 0.255313 0C0.188978 0 0.125189 0.0255335 0.0771751 0.0713045L0.0740767 0.0744026C0.05072 0.0965915 0.0321214 0.1233 0.0194123 0.152904C0.00670314 0.182507 0.00014925 0.214387 0.00014925 0.246603C0.00014925 0.278819 0.00670314 0.310699 0.0194123 0.340302C0.0321214 0.369906 0.05072 0.396614 0.0740767 0.418803L2.78384 3.00052L0.0740767 5.5812C0.05072 5.60338 0.0321214 5.63009 0.0194123 5.6597C0.00670314 5.6893 0.00014925 5.72118 0.00014925 5.7534C0.00014925 5.78561 0.00670314 5.81749 0.0194123 5.8471C0.0321214 5.8767 0.05072 5.90341 0.0740767 5.9256L0.0771751 5.92869C0.125189 5.97447 0.188978 6 0.255313 6C0.321648 6 0.385437 5.97447 0.433451 5.92869L3.31103 3.18692C3.33634 3.1628 3.35648 3.1338 3.37025 3.10167C3.38401 3.06954 3.39111 3.03495 3.39111 3C3.39111 2.96504 3.38401 2.93045 3.37025 2.89832C3.35648 2.86619 3.33634 2.8372 3.31103 2.81308Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </>
          ))}
        </div>
        <h1 className="mt-2 text-3xl font-bold">{findingContents.title}</h1>
        <p className="my-2 text-paragraph">{findingContents.description}</p>
      </div>
      <Mdx code={findingContents.body.code} />
    </div>
  );
}
