import Logo from "@/assets/Icons/Logo";
import Container from "@/layouts/Container";
import Image from "next/image";
import React, { useEffect } from "react";

type Props = {
  data: any;
};

export default function Products({ data }: Props) {
  console.log(data);

  return (
    <div className="mt-24">
      <h1
        className="mb-8 text-4xl font-black tracking-tight text-center md:text-6xl lg:text-7xl"
        style={{ textShadow: "0 2px 0px rgba(30, 215, 96, .5)" }}
      >
        Products
      </h1>
      <Container className="flex flex-wrap items-start justify-center gap-4 px-4 mb-24">
        {data.products
          .filter((d: any) => d.published == true)
          .map((d: any) => (
            <div
              key={d.name}
              className="basis-[400px] p-4 rounded-md bg-[#505558]/20 flex flex-col gap-3 items-start hover:-translate-y-2 duration-150"
            >
              <div className="relative w-full">
                <Image
                  src={d.thumbnail_url}
                  width={600}
                  height={600}
                  alt=""
                  className="w-full rounded-md"
                />
                <p className="absolute text-3xl font-black top-2 left-2 text-dark-primary">
                  {d.price > 100 ? `$${d.price / 100}` : "FREE"}
                </p>
              </div>
              <h2 className="text-base font-bold md:text-xl">{d.name}</h2>
              <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                {d.tags.map((t: string, index: number) => (
                  <p
                    key={index}
                    className="px-2 py-1 rounded-full text-dark-primary bg-dark-primary/10"
                  >
                    {t}
                  </p>
                ))}
              </div>
              <a
                href={d.short_url}
                target={"_blank"}
                className="inline-block px-3 py-2 text-sm font-medium text-black rounded-md hover:opacity-70 md:text-base bg-dark-primary"
              >
                Buy now
              </a>
            </div>
          ))}
      </Container>
      <div className="relative flex flex-col items-center w-full overflow-hidden border-t-4 h-96 border-dark-primary">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        <div className="w-36 h-36 bg-dark-primary -z-50 blur-[200px]"></div>
        <p className="z-50 flex items-center gap-1 text-4xl font-bold text-slate-700 dark:text-white">
          <Logo size="50" /> niLearn.dev
        </p>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const headers = {
    Authorization: `Bearer ancHYYmYmKluspQX9Ddvm3dbiwn9fN7CZsVqLJFU10Q`,
  };
  const res = await fetch("https://api.gumroad.com/v2/products", {
    headers,
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
