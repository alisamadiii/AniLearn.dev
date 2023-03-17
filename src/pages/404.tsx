import Container from "@/layouts/Container";
import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <Container className="mt-24">
      <h1 className="mb-4 font-black text-black text-7xl">Oops!</h1>
      <h2 className="text-2xl font-medium text-black">
        We can&lsquo;t seem to find the page you&lsquo;re looking for or this
        page is under construction.
      </h2>
      <p className="mt-8 mb-4 font-medium">
        Here are some helpful links instead:
      </p>
      <ul className="flex flex-col">
        <Link href="/authentication" className="text-blue-800">
          /authentication
        </Link>
        <Link href="/products/animated-content" className="text-blue-800">
          /product
        </Link>
      </ul>
    </Container>
  );
}
