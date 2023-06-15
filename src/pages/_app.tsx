import "@/styles/globals.css";
import Layouts from "@layouts/Layouts";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ThemeProvider>
  );
}
