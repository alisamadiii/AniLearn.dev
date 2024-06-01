import React, { useEffect, useState } from "react";
import { FaUser, FaRegUser } from "react-icons/fa";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

export default function CollaborationAnimation() {
  const [section, setSection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSection((prevTech) => (prevTech % 4) + 1); // Increment currentTech cyclically from 1 to 4
    }, 3000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex h-[300px] flex-col items-center justify-center gap-12">
      <MotionConfig transition={{ duration: 0.2 }}>
        <div>
          <AnimatePresence mode="wait">
            {section === 1 ? (
              <motion.h2
                key={"1"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-24 text-center text-4xl font-bold"
              >
                Do you want to help me out with improving the website?
              </motion.h2>
            ) : section === 2 ? (
              <motion.h2
                key={"2"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-24 text-center text-4xl font-bold"
              >
                Because I am alone hahaha
              </motion.h2>
            ) : section === 3 ? (
              <motion.h2
                key={"3"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-24 text-center text-4xl font-bold"
              >
                But...
              </motion.h2>
            ) : (
              <motion.h2
                key={"4"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-24 text-center text-4xl font-bold"
              >
                With the help you, we can improve it :)
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        <div className="flex h-12 gap-4">
          {section >= 2 && (
            <motion.span
              layoutId="me-collaboration"
              initial={{ scale: 0 }}
              animate={{
                scale: section === 3 ? 1.5 : 1,
                rotate: section === 3 ? 40 : 0,
              }}
              exit={{ scale: 0 }}
              className="inline-block text-4xl"
            >
              <FaUser />
            </motion.span>
          )}

          {section === 4 &&
            Array.from({ length: 4 }).map((_, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                }}
                transition={{ delay: index * 0.05 }}
                className="inline-block text-4xl"
              >
                <FaRegUser />
              </motion.span>
            ))}
        </div>
      </MotionConfig>
    </div>
  );
}
