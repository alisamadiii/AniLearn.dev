import React, { useState } from "react";
import Logo from "@/assets/Icons/Logo";

import Container from "@/layouts/Container";
import { GumroadTypes } from "@/types/Gumroad";
import Product from "@/components/Product";

type Props = {
  data: GumroadTypes;
};

export default function Products({ data }: Props) {
  const [products] = useState(data.products);

  return (
    <div className="mt-24">
      <h1
        className="mb-8 text-4xl font-black tracking-tight text-center md:text-6xl lg:text-7xl"
        style={{ textShadow: "0 2px 0px rgba(30, 215, 96, .5)" }}
      >
        Products
      </h1>
      <Container className="flex flex-wrap items-start justify-center gap-4 px-4 mb-24">
        {products
          .filter((product) => product.published == true)
          .map((product) => (
            <Product key={product.id} product={product} />
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
