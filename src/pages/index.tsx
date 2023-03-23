import MetaTags from "@/layouts/Head";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const route = useRouter();
  useEffect(() => {
    route.push("/products");
  });
  return (
    <>
      <MetaTags
        title={"Products"}
        banner={"https://i.ibb.co/fFr5qkh/Ani-Learn-Image.png"}
        description={
          "Discover our full range of products on our website, all in one convenient place."
        }
      />
      <main></main>
    </>
  );
}
