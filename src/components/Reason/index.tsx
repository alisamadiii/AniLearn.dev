import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Reason_1_IMG from "@assets/reason-1.png";
import Reason_2_IMG from "@assets/reason-2.png";
import Reason_3_IMG from "@assets/reason-3.png";
import Reason_4_IMG from "@assets/reason-4.png";

// Types
import { EachReasonProps, ReasonProps } from "./index.types";

export default function ReasonComponent({}: ReasonProps) {
  return (
    <>
      <EachReason
        div1ClassName="col-span-4 md:col-span-2 lg:col-span-3"
        div2ClassName="lg:grid-cols-2"
        title="Hands-on learning"
        description="Visual CSS editors provide a hands-on learning experience for users. They can directly manipulate CSS properties and immediately see the visual impact of their changes. This interactive approach enhances understanding and helps users grasp CSS concepts faster."
        image={Reason_1_IMG}
      />
      <EachReason
        div1ClassName="col-span-4 md:col-span-2 lg:col-span-1 lg:row-span-2 h-full"
        div2ClassName="h-full"
        imageClassName="lg:scale-150 lg:rotate-12"
        title="Real-time feedback"
        description="With visual CSS editors, users can instantly see the results of their CSS modifications. This immediate feedback allows them to experiment, iterate, and fine-tune their designs on the spot, leading to a more efficient and streamlined workflow."
        image={Reason_2_IMG}
      />
      <EachReason
        div1ClassName="col-span-4 md:col-span-2 lg:col-span-3"
        div2ClassName="lg:grid-cols-2"
        title="Increased productivity"
        description="By providing a visual interface for CSS editing, these websites can significantly boost productivity. Users can quickly prototype, explore different design options, and make adjustments without the need for manual coding and browser refreshes. This saves time and allows users to focus more on the creative aspects of web design."
        image={Reason_3_IMG}
      />
      <EachReason
        div1ClassName="col-span-4 md:col-span-2 lg:col-span-4"
        div2ClassName="lg:grid-cols-2"
        title="Enhanced design exploration"
        description="Visual CSS editors enable users to explore and experiment with various design possibilities more easily. They can quickly modify CSS properties, adjust layout, and experiment with different styles, colors, and effects. This flexibility encourages creativity and enables users to push the boundaries of their designs, leading to more innovative and visually compelling websites."
        image={Reason_4_IMG}
      />
    </>
  );
}

export const EachReason = ({
  div1ClassName,
  div2ClassName,
  imageClassName,
  title,
  description,
  image,
}: EachReasonProps) => {
  return (
    <motion.div
      id="box"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "circOut" }}
      className={`relative p-[2px] overflow-hidden rounded-lg ${div1ClassName}`}
    >
      <div
        className={`grid items-center p-4 overflow-hidden border rounded-lg bg-box border-white-low-opacity ${div2ClassName}`}
      >
        <div>
          <h3 className="mb-2 text-xl text-font-clr-1">{title}</h3>
          <p>{description}</p>
        </div>
        <Image
          src={image}
          width={800}
          height={800}
          alt=""
          className={`w-full ${imageClassName}`}
        />
      </div>
    </motion.div>
  );
};
