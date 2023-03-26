import Container from "@/layouts/Container";
import React, { useState } from "react";

import { motion } from "framer-motion";

type Props = {};

export default function FAQ({}: Props) {
  const [toggle, setToggle] = useState(true);

  return (
    <Container className="pb-4">
      <h2 className="text-5xl font-black text-slate-700">FAQ</h2>
      <div className={`w-full max-w-[700px] mx-auto bg-slate-300 rounded-md`}>
        <div onClick={() => setToggle(!toggle)} className="p-4">
          <h3>Why animated content.</h3>
        </div>
        <div
          className={`duration-500 px-4 overflow-hidden ${
            toggle ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <motion.p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis blanditiis eaque quo magnam necessitatibus non, odit
            explicabo laudantium eos, recusandae quasi distinctio eligendi
            temporibus hic reiciendis adipisci. Possimus, nesciunt sit!
          </motion.p>
        </div>
      </div>
    </Container>
  );
}
