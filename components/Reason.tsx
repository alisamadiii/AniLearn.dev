import React from "react";
import { motion } from "framer-motion";

import { REASONS } from "@/content/Details";

import Container from "./Container";
import HeadingText from "./HeadingText";

type Props = {};

export default function Reason({}: Props) {
  return (
    <div className="py-12 pb-36 px-4 md:px-8">
      <Container>
        <HeadingText className="text-3xl md:text-4xl font-bold leading-[1.5] md:leading-[1.4] my-3">
          Why animated contents?
        </HeadingText>
        <div className="border-l-4 border-primary mt-12 mx-6 flex flex-col gap-4">
          {REASONS.map((reason) => (
            <div
              key={reason.id}
              className="relative p-4 pl-12 hover:bg-primary hover:text-white duration-150"
            >
              <motion.div
                initial={{ x: -100, opacity: 0, rotate: 30 }}
                whileInView={{ x: -26, opacity: 1, rotate: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 !-translate-x-[26px] -translate-y-6 bg-primary w-12 h-12 rounded-full grid place-items-center text-white border-4 border-white"
              >
                {reason.id}
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <HeadingText className="text-xl md:text-2xl font-semibold mb-3">
                  {reason.title}
                </HeadingText>
              </motion.div>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="opacity-75 font-medium text-sm md:text-base"
              >
                {reason.description}
              </motion.p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
