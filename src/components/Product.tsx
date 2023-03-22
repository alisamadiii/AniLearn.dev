import { ProductType } from "@/types/Gumroad";
import Image from "next/image";
import React from "react";

type Props = {
  product: ProductType;
};

export default function Product({ product }: Props) {
  const { name, thumbnail_url, price, short_url, tags } = product;

  return (
    <div className="basis-[400px] p-4 rounded-md bg-[#505558]/20 flex flex-col gap-3 items-start hover:-translate-y-2 duration-150">
      <div className="relative w-full">
        <Image
          src={thumbnail_url}
          width={600}
          height={600}
          alt=""
          className="w-full rounded-md"
        />
        <p className="absolute text-3xl font-black top-2 left-2 text-dark-primary">
          {price > 100 ? `$${price / 100}` : "FREE"}
        </p>
      </div>
      <h2 className="text-base font-bold md:text-xl">{name}</h2>
      <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
        {tags.map((t: string, index: number) => (
          <p
            key={index}
            className="px-2 py-1 rounded-full text-dark-primary bg-dark-primary/10"
          >
            {t}
          </p>
        ))}
      </div>
      <a
        href={short_url}
        target={"_blank"}
        className="inline-block px-3 py-2 text-sm font-medium text-black rounded-md hover:opacity-70 md:text-base bg-dark-primary"
      >
        Buy now
      </a>
    </div>
  );
}
