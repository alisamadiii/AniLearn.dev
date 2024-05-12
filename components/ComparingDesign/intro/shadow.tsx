import React, { useEffect } from "react";
import { useAnimate, motion, useMotionValue } from "framer-motion";

type Props = {};

export default function Shadow({}: Props) {
  const [scope, animate] = useAnimate();

  const width1 = useMotionValue(200);
  const width2 = useMotionValue(200);

  useEffect(() => {
    const animateSquares = async () => {
      if (!scope) {
        return null;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      animate(width2, 50, { duration: 0.5 });

      await animate(".square-2", { opacity: 0.5 });
      await animate(".square-1", { boxShadow: "0 0 20px rgba(38, 60, 72)" });
      await animate(
        ".square-1",
        { boxShadow: "0 10px 20px rgba(38, 60, 72)" },
        { delay: 1 }
      );
      await animate(
        ".square-1",
        { boxShadow: "10px 0px 20px rgba(38, 60, 72)" },
        { delay: 1 }
      );
      await animate(
        ".square-1",
        { boxShadow: "0px 0px 60px rgba(38, 60, 72, 5)" },
        { delay: 1 }
      );
      await animate(
        ".square-1",
        { boxShadow: "0px 0px 0px rgba(38, 60, 72)", opacity: 0.5 },
        { delay: 1 }
      );
      // ! Square 2
      animate(width2, 200, { duration: 0.5 });
      animate(width1, 50, { duration: 0.5 });
      await animate(".square-2", { opacity: 1 }, { delay: 0.3 });
      await animate(".square-2", { boxShadow: "0 0 20px rgba(38, 60, 72)" });
      await animate(
        ".square-2",
        { boxShadow: "0 -10px 20px rgba(38, 60, 72)" },
        { delay: 1 }
      );
      await animate(
        ".square-2",
        { boxShadow: "-10px 0px 20px rgba(38, 60, 72, .6)" },
        { delay: 1 }
      );
      await animate(
        ".square-2",
        { boxShadow: "0px 0px 60px rgba(38, 60, 72, 5)" },
        { delay: 1 }
      );
      animate(".square-1", { opacity: 1 }, { delay: 0.5 });
      await animate(
        ".square-2",
        { boxShadow: "0px 0px 0px rgba(38, 60, 72, 5)" },
        { delay: 0.5 }
      );

      animate(width2, 200, { duration: 0.5 });
      animate(width1, 200, { duration: 0.5 });

      await animate([
        [".square-1", { boxShadow: "0px -10px 10px rgba(38, 60, 72, 5)" }],
        [
          ".square-2",
          { boxShadow: "0px 10px 20px rgba(38, 60, 72, 5)" },
          { at: "<" },
        ],
      ]);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await animate([
        [".square-1", { boxShadow: "-20px -10px 20px rgba(38, 60, 72, 5)" }],
        [
          ".square-2",
          { boxShadow: "10px 20px 60px rgba(38, 60, 72, 5)" },
          { at: "<" },
        ],
      ]);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await animate([
        [".square-1", { boxShadow: "0px 10px 10px rgba(38, 60, 72, 5)" }],
        [
          ".square-2",
          { boxShadow: "0px 0px 60px rgba(38, 60, 72, 5)" },
          { at: "<" },
        ],
      ]);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      await animate([
        [".square-1", { boxShadow: "0px 0px 0px rgba(38, 60, 72, 5)" }],
        [
          ".square-2",
          { boxShadow: "0px 0px 0px rgba(38, 60, 72, 5)" },
          { at: "<" },
        ],
      ]);

      animateSquares();
    };

    animateSquares();
  }, []);

  return (
    <>
      <div
        ref={scope}
        className="flex h-48 gap-4 border-b border-[#DEE7EB] p-8"
      >
        <motion.div
          style={{ width: width1 }}
          className="square-1 aspect-square grow rounded-xl bg-primary"
        />
        <motion.div
          style={{ width: width2 }}
          className="square-2 aspect-square grow rounded-xl bg-primary"
        />
      </div>
      <h3 className="p-4">Shadow</h3>
    </>
  );
}
