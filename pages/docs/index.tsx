import React from "react";
import Link from "next/link";
import { Container } from "@/components";

type Props = {};

export default function Index() {
  return (
    <Container className="mt-24">
      <Link href={"docs/html"}>HTML</Link>
      <Link href={"docs/css"}>CSS</Link>
      <Link href={"docs/js"}>JS</Link>
      <Link href={"docs/open-source"}>Open Source</Link>
    </Container>
  );
}
