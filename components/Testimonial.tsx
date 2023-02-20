import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { AiFillStar } from "react-icons/ai";

// Types
type Props = {
  data: OneTestimonial;
};
import { OneTestimonial } from "@/types/Testimonial";

export default function Testimonial({ data }: Props) {
  const { name, headline, img, star, testimonial } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-2">
        <Image
          className="w-8 h-8 rounded-full"
          src={
            img
              ? img
              : "https://cdn-icons-png.flaticon.com/512/9706/9706650.png"
          }
          width={32}
          height={32}
          alt={img ? `${name} - ${headline}` : "User's Image"}
        />
        <div>
          <h1 className="font-medium">{name}</h1>
          {headline && <h2 className="text-xs opacity-40">{headline}</h2>}
        </div>
      </div>
      {star && (
        <div className="flex gap-1 my-2 text-xl text-yellow-500">
          {[...Array(star).keys()].map((i) => (
            <AiFillStar key={i} />
          ))}
        </div>
      )}
      <p className="opacity-75">{testimonial}</p>
    </motion.div>
  );
}
