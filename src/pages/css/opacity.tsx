/* It is an open-source project, this page is going to be written by Ameya02 */
import React, { useState } from "react";
import Image from "next/image";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, GivingComment, Input, Playground } from "@components/Tech";

type Props = {};

export default function Opacity({}: Props) {
  const [image, setImage] = useState<string | null>(null);

  const [width, setWidth] = useState(384);
  const [height, setHeight] = useState(240);
  const [opacity, setOpacity] = useState(0.5);

  const IMAGE =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

  const Codes = `img {
  opacity: ${opacity};
}`; // Use backtick for writing your code

  return (
    <>
      <MetaTag
        title="opacity"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>opacity</h1><p>The opacity CSS property sets transparency of an element, such as an <code>img</code> or <code>div</code>." />
        <CodeBlocks
          codeString={Codes}
          language="css"
          fileName="style.css"
        />

        <Workplace className="">
          <BringChanges className="flex justify-center mb-8">
            <input
              type="url"
              placeholder="https://"
              id="website"
              value={image || ""}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 bg-transparent border rounded-md outline-none max-w-input border-white-low-opacity dark:border-white-low-opacity-d focus:border-primary dark:focus:border-primary placeholder:opacity-50"
            />
          </BringChanges>
          <LiveChanges className="flex justify-center">
            <Playground
              className="p-0"
              style={{ width, height }}>
              <Image
                src={image || IMAGE}
                width={400}
                height={300}
                alt="object-fit"
                className="w-full h-full"
                style={{ opacity }}
              />
            </Playground>
            <Playground
              className="p-0"
              style={{ width, height }}>
              <div
                className="bg-red-700"
                style={{ width: width, height: height, opacity: opacity }}></div>
            </Playground>
          </LiveChanges>

          <BringChanges className="mt-12 space-y-6">
            <div className="flex flex-col items-start mx-auto max-w-playground">
              <h2 className="text-xl text-black dark:text-white">Parent</h2>
              <Input
                name="Width"
                unit="px"
                value={width}
                setValue={setWidth}
                onChange={(e) => setWidth(e.target.valueAsNumber)}
                increaseFactor={1}
                eResize={true}
              />
              <Input
                name="Height"
                unit="px"
                value={height}
                setValue={setHeight}
                onChange={(e) => setHeight(e.target.valueAsNumber)}
                increaseFactor={1}
                eResize={true}
              />
            </div>

            <div className="mx-auto max-w-playground">
              <h2 className="mb-4 text-xl text-black dark:text-white">Children</h2>
              <GivingComment comment={`opacity should be between 0.1-1.0`}>
                <Input
                  name="Opacity"
                  value={opacity}
                  setValue={setOpacity}
                  onChange={(e) => setOpacity(e.target.value)}
                  increaseFactor={0.001}
                  eResize={true}
                />
              </GivingComment>
            </div>
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
