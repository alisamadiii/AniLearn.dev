import { Inter } from "next/font/google";

import { Heading_1 } from "@components/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Heading_1 className="text-5xl text-center text-white">
        Animation eases learning process.
      </Heading_1>
    </main>
  );
}
