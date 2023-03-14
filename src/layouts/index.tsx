import React from "react";
import { Provider } from "react-redux";

import { store } from "@/redux/store";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export default function Layouts({ children }: Props) {
  return (
    <Provider store={store}>
      <div className={`${inter.className} overflow-x-hidden text-slate-500`}>
        <Navbar />
        <main>{children}</main>
        {/* <footer>Footer</footer> */}
      </div>
    </Provider>
  );
}
