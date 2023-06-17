import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="text-font-clr bg-background-clr dark:bg-background-clr-d dark:text-font-clr-d">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
