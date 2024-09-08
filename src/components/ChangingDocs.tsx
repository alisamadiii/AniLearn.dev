"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { allContents } from "contentlayer/generated";
import { techs } from "@/utils";

export function Left() {
  const { docs } = useParams<{ docs: string[] }>();

  const docsIndx = allContents
    .sort((a, b) => {
      const getBaseSlug = (slug: string) => {
        return slug.split("/")[1] || "";
      };

      const baseA = getBaseSlug(a.slug);
      const baseB = getBaseSlug(b.slug);

      const indexA = techs.includes(baseA)
        ? techs.indexOf(baseA)
        : techs.length;
      const indexB = techs.includes(baseB)
        ? techs.indexOf(baseB)
        : techs.length;

      return indexA - indexB;
    })
    .findIndex((doc) => doc.slug === `/${docs.join("/")}`);

  return (
    <div className="sticky top-0 hidden max-h-dvh w-20 items-center xl:flex">
      {allContents[docsIndx - 1] && (
        <Link
          href={allContents[docsIndx - 1].slug}
          className="flex h-20 w-20 items-center justify-center rounded-full opacity-50 duration-300 hover:bg-background hover:opacity-100 hover:shadow-sm"
        >
          <svg
            width="27"
            height="21"
            viewBox="0 0 27 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.349624 11.3171C0.133096 11.1003 0.0114746 10.8064 0.0114746 10.5C0.0114746 10.1936 0.133096 9.89971 0.349624 9.68291L9.59962 0.432913C9.70548 0.319313 9.83313 0.228197 9.97496 0.165003C10.1168 0.101807 10.2699 0.0678253 10.4252 0.0650864C10.5804 0.0623474 10.7346 0.0909061 10.8786 0.149059C11.0226 0.207212 11.1533 0.293768 11.2631 0.403564C11.3729 0.513359 11.4595 0.644146 11.5176 0.78812C11.5758 0.932093 11.6044 1.0863 11.6016 1.24155C11.5989 1.3968 11.5649 1.54991 11.5017 1.69175C11.4385 1.83358 11.3474 1.96123 11.2338 2.06708L3.95712 9.34375L25.8334 9.34375C26.14 9.34375 26.4341 9.46557 26.651 9.68241C26.8678 9.89925 26.9896 10.1933 26.9896 10.5C26.9896 10.8067 26.8678 11.1007 26.651 11.3176C26.4341 11.5344 26.14 11.6562 25.8334 11.6562L3.95712 11.6562L11.2338 18.9329C11.3474 19.0388 11.4385 19.1664 11.5017 19.3083C11.5649 19.4501 11.5989 19.6032 11.6016 19.7584C11.6044 19.9137 11.5758 20.0679 11.5176 20.2119C11.4595 20.3559 11.3729 20.4866 11.2631 20.5964C11.1533 20.7062 11.0226 20.7928 10.8786 20.8509C10.7346 20.9091 10.5804 20.9376 10.4252 20.9349C10.2699 20.9322 10.1168 20.8982 9.97496 20.835C9.83313 20.7718 9.70548 20.6807 9.59962 20.5671L0.349624 11.3171Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

export function Right() {
  const { docs } = useParams<{ docs: string[] }>();

  const docsIndx = allContents
    .sort((a, b) => {
      const getBaseSlug = (slug: string) => {
        return slug.split("/")[1] || "";
      };

      const baseA = getBaseSlug(a.slug);
      const baseB = getBaseSlug(b.slug);

      const indexA = techs.includes(baseA)
        ? techs.indexOf(baseA)
        : techs.length;
      const indexB = techs.includes(baseB)
        ? techs.indexOf(baseB)
        : techs.length;

      return indexA - indexB;
    })
    .findIndex((doc) => doc.slug === `/${docs.join("/")}`);

  return (
    <div className="sticky top-0 hidden max-h-dvh w-20 items-center xl:flex">
      {allContents[docsIndx + 1] && (
        <Link
          href={allContents[docsIndx + 1].slug}
          className="flex h-20 w-20 items-center justify-center rounded-full opacity-50 duration-300 hover:bg-background hover:opacity-100 hover:shadow-sm"
        >
          <svg
            width="27"
            height="21"
            viewBox="0 0 27 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.6504 9.68292C26.8669 9.89972 26.9885 10.1936 26.9885 10.5C26.9885 10.8064 26.8669 11.1003 26.6504 11.3171L17.4004 20.5671C17.2945 20.6807 17.1669 20.7718 17.025 20.835C16.8832 20.8982 16.7301 20.9322 16.5748 20.9349C16.4196 20.9377 16.2654 20.9091 16.1214 20.8509C15.9774 20.7928 15.8467 20.7062 15.7369 20.5964C15.6271 20.4866 15.5405 20.3559 15.4824 20.2119C15.4242 20.0679 15.3956 19.9137 15.3984 19.7584C15.4011 19.6032 15.4351 19.4501 15.4983 19.3083C15.5615 19.1664 15.6526 19.0388 15.7662 18.9329L23.0429 11.6563H1.16663C0.85997 11.6563 0.565872 11.5344 0.349033 11.3176C0.132195 11.1008 0.010376 10.8067 0.010376 10.5C0.010376 10.1933 0.132195 9.89925 0.349033 9.68241C0.565872 9.46557 0.85997 9.34375 1.16663 9.34375H23.0429L15.7662 2.06709C15.6526 1.96123 15.5615 1.83358 15.4983 1.69175C15.4351 1.54992 15.4011 1.39681 15.3984 1.24156C15.3956 1.08631 15.4242 0.932096 15.4824 0.788123C15.5405 0.644149 15.6271 0.513364 15.7369 0.403568C15.8467 0.293773 15.9774 0.207217 16.1214 0.149063C16.2654 0.0909101 16.4196 0.0623516 16.5748 0.0650908C16.7301 0.06783 16.8832 0.101811 17.025 0.165007C17.1669 0.228203 17.2945 0.319318 17.4004 0.432919L26.6504 9.68292Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
