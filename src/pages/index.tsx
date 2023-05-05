import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Heading_1, Heading_2, Heading_3 } from "@components/index";
import Container from "@layouts/Container";

const inter = Inter({ subsets: ["latin"] });

import HeaderRects from "@assets/Header-rects";

// Icons
import { IoIosArrowForward, IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import Technology from "@components/Technology";

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
      <header className="py-12">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 z-50 flex items-center w-full h-16 bg-background-clr">
          <Container className="flex items-center justify-between">
            <Link href={"#"} className="text-lg font-semibold text-white">
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
        <Container className="flex flex-col items-center gap-4 mt-32 text-center">
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
        </Container>
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

      <section className="py-12">
        <Container className="relative">
          <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
            technologies
          </small>
          <Heading_2 className="mt-2 text-4xl text-white">
            Web development technologies
          </Heading_2>
          <Heading_2 className="text-4xl">Practice Visually</Heading_2>
          {/* Gradient background */}
          <div className="absolute h-24 translate-y-24 w-96 bg-primary/20 -z-10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-24 w-96 bg-primary/10 -z-10 blur-3xl" />
          {/* container */}
          <div className="grid gap-8 mt-8 md:grid-cols-2">
            {/* item-1 */}
            <Technology
              name="HTML"
              description="HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes."
              Icon={AiFillHtml5}
              link="#"
            />
            {/* item-2 */}
            <Technology
              name="CSS"
              description="CSS was developed by W3C (World Wide Web Consortium) in 1996 for a rather simple reason. HTML element was not designed to have tags that would help format the page. You were only supposed to write the markup for the web page."
              Icon={IoLogoCss3}
              link="#"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
