import Discount_Code from "@/components/Discount_Code";
import Layouts from "@/layouts";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = useState(true);
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
        <AnimatePresence>
          {isOpen && <Discount_Code setOpen={setOpen} />}
        </AnimatePresence>
      </Layouts>
    </>
  );
}
