import { Inter } from "next/font/google";

import { Heading_1, Heading_2 } from "@components/index";
import Link from "next/link";
import Container from "@layouts/Container";

const inter = Inter({ subsets: ["latin"] });

import { IoIosArrowForward } from "react-icons/io";
import HeaderRects from "@assets/Header-rects";
import { useEffect, useState } from "react";

export default function Home() {
  const [isImage, setIsImage] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;

      scrollY > 300 ? setIsImage(true) : setIsImage(false);
    });
  }, []);
  return (
    <main className={`${inter.className}`}>
      <header className="px-4 py-12">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 z-50 flex items-center w-full h-16 px-4 bg-background-clr">
          <Container className="flex items-center justify-between">
            <Link href={"#"} className="text-xl font-black text-white">
              AniLearn.dev
            </Link>
            <Link
              href={"#"}
              className="flex items-center px-4 py-2 text-xs text-white rounded-full bg-button group"
            >
              Start Now
              <IoIosArrowForward className="duration-300 group-hover:translate-x-1" />
            </Link>
          </Container>
        </nav>
        {/* Section */}
        <div className="flex flex-col items-center gap-4 mt-32 text-center">
          <Heading_1 className="text-4xl text-center text-white md:text-5xl lg:text-6xl">
            Animation eases learning process.
          </Heading_1>
          <Heading_2 className="text-2xl text-transparent md:text-4xl bg-clip-text bg-gradient-text-2">
            Learning something with animation doesn&apos;t get easier than this
          </Heading_2>
          <p className="md:text-lg font-medium w-full max-w-[400px]">
            We offer top-notch content for easy learning, with clear visual
            development principles.
          </p>
          <Link
            href={"#"}
            className="px-5 py-2 mt-12 text-sm text-black duration-200 bg-white rounded-full shadow-main-button hover:shadow-main-button-hover"
          >
            Start Now
          </Link>
        </div>
        {/* Image */}
        <Container className="relative flex items-center justify-center p-3 mt-12">
          <HeaderRects />
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
            alt=""
            className={`w-full max-w-[800px] duration-1000 rounded-xl ${
              isImage == false && ""
            }`}
          />
        </Container>
      </header>
    </main>
  );
}
