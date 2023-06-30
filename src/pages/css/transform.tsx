import React, { useState } from "react";
import Image from "next/image";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Range, Playground } from "@components/Tech";

type Props = {};

export default function Transform({}: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [scale, setScale] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [skew, setSkew] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const IMAGE =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

  const Codes_1 = `img {
  transform: scale(${
    scale * 0.01
  }) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg) translate(${translateX}px, ${translateY}px);
}`; // Use backtick for writing your code

  const Codes_2 = `img {
  transform: perspective(200px) scale(${
    scale * 0.01
  }) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg) translate(${translateX}px, ${translateY}px);
}`; // Use backtick for writing your code

  return (
    <>
      <MetaTag
        title="transform"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>transform</h1><p>The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.</p>" />

        <Workplace className="">
          <BringChanges className="flex justify-center mb-8">
            <input
              type="url"
              placeholder="https://"
              id="website"
              value={image || ""}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 bg-transparent border rounded-md outline-none max-w-input border-white-low-opacity focus:border-primary placeholder:opacity-50"
            />
          </BringChanges>
          <LiveChanges className="flex flex-wrap gap-8">
            <div className="basis-80 grow">
              <CodeBlocks
                codeString={Codes_1}
                language="css"
                fileName="style.css"
                wrapLongLines={true}
              />
              <Playground className="flex items-center justify-center flex-grow overflow-hidden h-52 before:content-['Without-Perspective'] before:bg-red-800 before:text-white before:px-2 before:py-1 before:rounded before:absolute before:top-0 before:left-0 before:text-xs">
                <Image
                  src={image || IMAGE}
                  width={400}
                  height={400}
                  alt="Image"
                  className="duration-200 ease-out rounded-md w-44"
                  style={{
                    transform: `scale(${
                      scale * 0.01
                    }) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg) translate(${translateX}px, ${translateY}px)`
                  }}
                />
              </Playground>
            </div>
            <div className="grow basis-80">
              <CodeBlocks
                codeString={Codes_2}
                language="css"
                fileName="style.css"
                wrapLongLines={true}
              />
              <Playground className="relative flex items-center justify-center p-4 overflow-hidden h-52 before:content-['Perspective'] before:bg-green-800 before:text-white before:px-2 before:py-1 before:rounded before:absolute before:top-0 before:left-0 before:text-xs">
                <Image
                  src={image || IMAGE}
                  width={400}
                  height={400}
                  alt="Image"
                  className="duration-300 ease-out rounded-md w-44"
                  style={{
                    transform: `scale(${
                      scale * 0.01
                    }) perspective(200px) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg) translate(${translateX}px, ${translateY}px)`
                  }}
                />
              </Playground>
            </div>
          </LiveChanges>
          <BringChanges className="mt-12 space-y-4">
            <Range
              maxNum={200}
              filterName="Scale"
              value={scale}
              onChange={(e) => setScale(e.target.value)}
            />
            <Range
              maxNum={200}
              minNum={-200}
              filterName="TranslateX"
              value={translateX}
              onChange={(e) => setTranslateX(e.target.value)}
            />
            <Range
              maxNum={200}
              minNum={-200}
              filterName="TranslateY"
              value={translateY}
              onChange={(e) => setTranslateY(e.target.value)}
            />
            <Range
              maxNum={360}
              filterName="Rotate"
              value={rotate}
              onChange={(e) => setRotate(e.target.value)}
            />
            <Range
              maxNum={360}
              filterName="RotateX"
              value={rotateX}
              onChange={(e) => setRotateX(e.target.value)}
            />
            <Range
              maxNum={360}
              filterName="RotateY"
              value={rotateY}
              onChange={(e) => setRotateY(e.target.value)}
            />
            <Range
              maxNum={360}
              filterName="Skew"
              value={skew}
              onChange={(e) => setSkew(e.target.value)}
            />
            <Range
              maxNum={360}
              filterName="SkewX"
              value={skewX}
              onChange={(e) => setSkewX(e.target.value)}
            />
            <Range
              maxNum={360}
              filterName="SkewY"
              value={skewY}
              onChange={(e) => setSkewY(e.target.value)}
            />
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
