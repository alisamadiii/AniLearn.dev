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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="hidden md:block">
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
              <button className="px-4 py-2 mt-8 font-bold duration-150 rounded-md shadow-2xl text-slate-700 bg-primary focus:shadow-button">
                Purchase Now
              </button>
            </div>
            <div className="md:hidden">
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
