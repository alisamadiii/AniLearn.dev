import React from "react";
import { motion } from "framer-motion";

import { PRICING } from "@/contents/Pricing";
import Container from "@/layouts/Container";

type Props = {};

import { BsCheckLg } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { AiFillWarning } from "react-icons/ai";

export default function Pricing({}: Props) {
  const discount = (percentage: number, price: number) => {
    const firstEquation = price * percentage;
    return (price - firstEquation / 100).toFixed(2);
  };

  return (
    <Container className="flex flex-wrap gap-4 px-4">
      {PRICING.map((pricing, index) => (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.05 * index }}
          key={pricing.level}
          className="flex flex-col grow basis-[300px] bg-slate-100 p-4 rounded-xl shadow-anilearn overflow-hidden"
        >
          <small className="block text-center">{pricing.level}</small>
          <h2 className="my-3 text-3xl font-black text-center text-slate-700">
            {pricing.discount ? (
              <>
                <del className="text-xl font-medium opacity-50">
                  ${pricing.price}
                </del>
                <span className="ml-2">
                  ${discount(pricing.discount, pricing.price)}
                </span>
              </>
            ) : (
              `$${pricing.price}`
            )}
          </h2>
          <ul className="mb-8">
            <li className="flex items-center gap-4 py-2 text-xl font-medium border-b-2">
              <span>
                {pricing.video ? (
                  <BsCheckLg className="text-green-700" />
                ) : (
                  <IoMdCloseCircle className="text-red-700" />
                )}
              </span>
              <span>Video</span>
            </li>
            <li className="flex items-center gap-4 py-2 text-xl font-medium border-b-2">
              <span>
                {pricing.powerPoint ? (
                  <BsCheckLg className="text-green-700" />
                ) : (
                  <IoMdCloseCircle className="text-red-700" />
                )}
              </span>
              <span>PowerPoint</span>
            </li>
            <li className="flex items-center gap-4 py-2 text-xl font-medium">
              <span>
                {pricing.shareVideo ? (
                  <BsCheckLg className="text-green-700" />
                ) : (
                  <IoMdCloseCircle className="text-red-700" />
                )}
              </span>
              <span>Share Video</span>
            </li>
            <ul className="pl-16 list-disc">
              {pricing.shareVideoDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            {pricing.attribution !== null &&
              (pricing.attribution == true ? (
                <li className="flex items-center gap-4 py-2 text-xl font-medium">
                  <span>
                    <AiFillWarning className="text-orange-500" />
                  </span>
                  <span>Share Video</span>
                </li>
              ) : (
                <li className="flex items-center gap-4 py-2 text-xl font-medium">
                  <span>
                    <BsCheckLg className="text-green-700" />
                  </span>
                  <span>Share Video</span>
                </li>
              ))}
          </ul>
          <a
            href="#"
            className="block py-2 mt-auto font-bold text-center duration-200 rounded-md bg-slate-300 hover:bg-slate-900 hover:text-slate-100"
          >
            Get Now
          </a>
        </motion.div>
      ))}
    </Container>
  );
}
