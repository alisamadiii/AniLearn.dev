import React, { useState } from "react";
import Router from "next/router";

import { ContentsProvider } from "@/context/Contents";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "highlight.js/styles/atom-one-dark.css";

type Props = {
  children: React.ReactNode;
};

// Fonts
import { DM_Sans } from "@next/font/google";
import Loading from "@/components/Loading";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Layouts({ children }: Props) {
  const [loader, setLoader] = useState<boolean>(false);

  Router.events.on("routeChangeStart", () => {
    setLoader(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoader(false);
  });

  return (
    <ContentsProvider>
      {loader && <Loading />}
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-screen bg-white bg-square-pattern bg-pattern -z-50"></div>
      <main className={dm_sans.className}>{children}</main>
      <Footer />
    </ContentsProvider>
  );
}
