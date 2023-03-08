import "@/styles/globals.css";
import "@/styles/blogs.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import Layouts from "@/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
        <Analytics />
      </Layouts>
    </>
  );
}
