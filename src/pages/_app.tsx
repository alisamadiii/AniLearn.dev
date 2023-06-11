import "@/styles/globals.css";
// import "@/styles/CodeBlocks.css";
import Layouts from "@layouts/Layouts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
