import React, { useState, useEffect, useContext } from "react";

import { ContentsContext } from "@/context/Contents";

import { db } from "@/utils/firebase/Firebase";
import { doc, onSnapshot, getDoc } from "firebase/firestore";

import Content from "./Content";

import Masonry from "react-masonry-css";

import { AiFillCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";

type Props = {};

// type ContentTypes = {
//   title: string;
//   content: {
//     title: string;
//     description: string;
//     date: string;
//     views: number;
//     duration: number;
//     twitter: string;
//     youtube: null | string;
//     link: string;
//     free: boolean;
//   }[];
// };

const breakpointColumnsObj = {
  default: 2,
  768: 1,
};

export default function Contents({}: Props) {
  const [technology, setTechnology] = useState<number>(1);
  const [contents, setContents] = useState<any>({});
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const { setIsContentOpen } = useContext(ContentsContext);

  useEffect(() => {
    const choosingTechnologies = (): any => {
      if (technology == 1) return "html";
      else if (technology == 2) return "css";
      else if (technology == 3) return "js";
    };

    const docRef = doc(db, "contents", choosingTechnologies());
    const gettingContents = async () => {
      const contents = await getDoc(docRef);
      const snapshot: any = { ...contents.data(), id: contents.id };
      setContents(snapshot);
    };
    gettingContents();
  }, [technology]);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-white bg-opacity-90">
      <div className="relative w-full max-w-[900px] h-[589px] flex bg-white shadow-2xl rounded-2xl overflow-hidden">
        <nav
          className={`w-32 h-full bg-[#EFEFEF] absolute top-0 left-0 md:translate-x-0 md:static z-30 ${
            isNavOpen ? "-translate-x-0" : "-translate-x-full"
          } duration-300`}
        >
          <ul className="flex flex-col h-full">
            <li
              className={`p-8 text-center font-medium text-2xl cursor-pointer ${
                technology == 1 && "bg-white"
              }`}
              onClick={() => {
                setTechnology(1);
                setIsNavOpen(false);
              }}
            >
              HTML
            </li>
            <li
              className={`p-8 text-center font-medium text-2xl cursor-pointer ${
                technology == 2 && "bg-white"
              }`}
              onClick={() => {
                setTechnology(2);
                setIsNavOpen(false);
              }}
            >
              CSS
            </li>
            <li
              className={`p-8 text-center font-medium text-2xl cursor-pointer ${
                technology == 3 && "bg-white"
              }`}
              onClick={() => {
                setTechnology(3);
                setIsNavOpen(false);
              }}
            >
              JS
            </li>
            <li
              className={`mt-auto p-8 flex justify-center items-center font-medium text-3xl cursor-pointer ${
                isPrivacyOpen && "bg-red-600 text-white"
              } duration-150`}
              onClick={() => {
                setIsPrivacyOpen(!isPrivacyOpen);
                setIsNavOpen(false);
              }}
            >
              <HiInformationCircle />
            </li>
          </ul>
        </nav>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="w-full pt-4 pr-4 m-0 overflow-auto my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {contents.content &&
            contents.content.map((content: any) => (
              <Content key={content.title} content={content} />
            ))}
          <div className="w-full h-[100px] bg-gradient-to-t from-white to-transparent absolute bottom-[-30px] left-0 pointer-events-none"></div>
        </Masonry>

        <div
          className={`w-full max-w-[400px] h-[400px] bg-white border-t-2 border-l-2 absolute right-0 bottom-0 p-4 duration-200 ${
            isPrivacyOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h1 className="text-3xl font-medium">Privacy</h1>
          <p className="mt-2 opacity-75">
            You are not allow to use any of this video for social media, unless
            you mention the creator & did not add anything onto the video.
          </p>
          <p className="mt-9">
            <span className="font-bold">Note</span>: Right now, All the video
            are on Twitter but in the future, you can see them on YouTube.
          </p>
        </div>
      </div>

      <AiFillCloseSquare
        className="absolute text-4xl cursor-pointer top-5 right-5"
        onClick={() => setIsContentOpen(false)}
      />
      <div
        className={`md:hidden bg-black text-white text-xl p-1 absolute top-6 right-16 rounded-sm cursor-pointer`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <AiOutlineMenu />
      </div>
    </div>
  );
}
