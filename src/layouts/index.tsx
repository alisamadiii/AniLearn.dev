import React, { useEffect } from "react";

import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export default function Layouts({ children }: Props) {
  const route = useRouter();
  useEffect(() => {
    if (route.pathname == "/products") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <div className={`${inter.className} text-slate-500 dark:text-white`}>
      <Navbar />
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}
