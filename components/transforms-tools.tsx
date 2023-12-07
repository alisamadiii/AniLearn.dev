import React from "react";
import Image from "next/image";
import { type Variants, motion, AnimatePresence } from "framer-motion";

import { useTransformStore } from "@/context";
import { Rect } from "./rect";

interface Props {
  style: React.CSSProperties;
}

export function Content({ style }: Props) {
  const { image } = useTransformStore();

  const animate: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {image ? (
        <motion.div
          key={"image"}
          variants={animate}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1, ease: "backOut" }}
        >
          <Image
            src={"/my-image.png"}
            width={160}
            height={160}
            alt="my-image"
            style={style}
            className="mx-auto"
          />
        </motion.div>
      ) : (
        <motion.div
          key={"rect"}
          variants={animate}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1, ease: "backOut" }}
        >
          <Rect style={style} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
