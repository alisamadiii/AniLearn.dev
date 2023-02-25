import { Container, HeadingText } from "@/components";
import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <>
      <Head>
        <title>404</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <Container className="flex flex-col justify-center w-full h-screen gap-4 px-4 md:px-8">
        <HeadingText className="text-5xl font-black md:text-6xl">
          Oops!
        </HeadingText>
        <h2 className="text-3xl font-medium md:text-4xl">
          We can&apos;t seem to find the page you&apos;re looking for.
        </h2>
        <p>Error code: 404</p>
        <ul className="flex flex-col">
          <span className="text-lg font-medium">
            Here are some helpful links instead:
          </span>
          <Link href={"/"} className="text-primary">
            Home
          </Link>
          <Link href={"/docs"} className="text-primary">
            Docs
          </Link>
          <Link href={"/testimonial"} className="text-primary">
            Testimonial
          </Link>
          <Link href={"/pricing"} className="text-primary">
            Pricing
          </Link>
        </ul>
      </Container>
    </>
  );
}
