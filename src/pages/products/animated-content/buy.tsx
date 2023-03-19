import Container from "@/layouts/Container";
import React, { useState } from "react";
import { Badge } from "@tremor/react";
import { Legend } from "@tremor/react";
import { TabList, Tab } from "@tremor/react";
import { motion } from "framer-motion";

type Props = {};

import ProductIMG from "@/assets/Hero img.png";
import Image from "next/image";

import { BiCart } from "react-icons/bi";
import { IoInformationOutline } from "react-icons/io5";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineCloseSquare, AiFillWarning } from "react-icons/ai";
import { REASONS } from "@/contents/Reasons";

export default function AnimatedContent({}: Props) {
  const [showCard, setShowCard] = useState<string>("1");

  return (
    <>
      <Container className="px-4 py-24">
        <TabList
          defaultValue="1"
          onValueChange={(value) => setShowCard(value)}
          className="mt-6 mb-8"
          color="slate"
        >
          <Tab value="1" text="Product" icon={BiCart} />
          <Tab
            value="2"
            text="Additional Information"
            icon={IoInformationOutline}
          />
        </TabList>
        {showCard == "1" ? (
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-3">
            <div className="sticky left-0 hidden top-12 md:block">
              <Image
                src={ProductIMG}
                width={700}
                height={400}
                alt=""
                className="w-full"
              />
              <Legend
                className="mt-3"
                categories={["Quality", "Cool Effects"]}
                colors={["orange", "blue"]}
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold text-slate-700">
                Animated Video
              </h1>
              <p className="my-3">
                There are some videos that will make your lesson easy to learn
                some concepts of HTML, CSS & JavaScript.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge color="orange">intermediate</Badge>
                <Badge color="green">Easy to learn</Badge>
                <Badge color="blue">4k</Badge>
              </div>
              <div className="my-12 md:hidden">
                <Image
                  src={ProductIMG}
                  width={700}
                  height={400}
                  alt=""
                  className="w-full"
                />
                <Legend
                  className="mt-3"
                  categories={["Quality", "Cool Effects"]}
                  colors={["orange", "blue"]}
                />
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex flex-col basis-[300px] items-center p-4 rounded-lg grow bg-slate-100">
                  <small>Basis</small>
                  <p className="my-4 text-4xl font-black text-slate-700">
                    <del className="mr-4 opacity-40">$29</del>$9
                  </p>
                  <ul className="w-full mb-8 space-y-4">
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        Video
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        PowerPoint
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <AiOutlineCloseSquare className="text-xl text-red-600" />{" "}
                        Share Video
                      </p>
                      <ul className="mt-2 space-y-2 text-sm list-disc pl-[20%]">
                        <li>to your friends</li>
                        <li>to social media</li>
                      </ul>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="w-full py-2 mt-auto font-bold text-center rounded-md text-slate-700 bg-slate-300"
                  >
                    Purchase Now
                  </a>
                </div>
                <div className="flex flex-col basis-[300px] items-center p-4 rounded-lg grow bg-slate-100">
                  <small>Intermediate</small>
                  <p className="my-4 text-4xl font-black text-slate-700">$40</p>
                  <ul className="w-full space-y-4">
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        Video
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        PowerPoint
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        Share Video
                      </p>
                      <ul className="mt-2 space-y-2 text-sm list-disc pl-[20%]">
                        <li>to your friends</li>
                        <li>to social media</li>
                      </ul>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <AiFillWarning className="text-xl text-orange-400" />
                        Need Attribution
                      </p>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="w-full py-2 mt-8 font-bold text-center rounded-md text-slate-700 bg-slate-300"
                  >
                    Purchase Now
                  </a>
                </div>
                <div className="flex flex-col basis-[300px] items-center p-4 rounded-lg grow bg-slate-100">
                  <small>Advance</small>
                  <p className="my-4 text-4xl font-black text-slate-700">$55</p>
                  <ul className="w-full space-y-4">
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        Video
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        PowerPoint
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        Share Video
                      </p>
                      <ul className="mt-2 space-y-2 text-sm list-disc pl-[20%]">
                        <li>to your friends</li>
                        <li>to social media</li>
                      </ul>
                    </li>
                    <li>
                      <p className="flex items-center gap-4">
                        <BsCheck2Circle className="text-xl text-green-600" />
                        No Attribution
                      </p>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="w-full py-2 mt-8 font-bold text-center rounded-md text-slate-700 bg-slate-300"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="mb-8 text-2xl font-bold md:text-3xl text-slate-700">
              Why animated content?
            </h1>
            <div className="flex flex-wrap gap-4">
              {REASONS.map((reason) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.03 * reason.id }}
                  key={reason.id}
                  className="grow basis-[300px] bg-slate-100 p-4 rounded-md shadow-anilearn border-2 border-slate-200"
                >
                  <div className="flex items-center justify-center w-8 h-8 mb-2 rounded-full bg-slate-800 text-slate-100">
                    {reason.id}
                  </div>
                  <h2 className="mt-1 mb-2 text-xl font-semibold text-slate-700">
                    {reason.title}
                  </h2>
                  <p>{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </Container>
    </>
  );
}
