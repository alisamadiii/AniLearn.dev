import React, { useState } from "react";
import Workplace, { BringChanges, LiveChanges } from "..";
import { Range } from "@components/Tech/Range";
import Checkbox from "@components/Checkbox";
import Image from "next/image";

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
  const [perspective, setPerspective] = useState<boolean>(false);

  const IMAGE =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

  return (
    <Workplace>
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
      <LiveChanges>
        <div className="relative flex items-center justify-center w-full p-4 overflow-hidden border rounded-lg h-52 bg-box border-white-low-opacity">
          <Image
            src={image || IMAGE}
            width={400}
            height={400}
            alt="Image"
            className="duration-200 ease-out rounded-md w-44"
            style={
              perspective == false
                ? {
                    transform: `scale(${
                      scale * 0.01
                    }) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg) translate(${translateX}px, ${translateY}px)`,
                  }
                : {
                    transform: `scale(${
                      scale * 0.01
                    }) perspective(200px) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg) translate(${translateX}px, ${translateY}px)`,
                  }
            }
          />
        </div>
      </LiveChanges>

      <button
        className="px-4 py-2 mt-8 text-white rounded-md bg-primary hover:bg-primary/70"
        onClick={() => {
          setPerspective(false);
          setScale(100);
          setTranslateX(0);
          setTranslateY(0);
          setRotate(0);
          setRotateX(0);
          setRotateY(0);
          setSkew(0);
          setSkewX(0);
          setSkewY(0);
        }}
      >
        RESET
      </button>

      <BringChanges className="mt-12 space-y-4">
        <Checkbox
          name="perspective"
          checked={perspective}
          onChange={(e: any) => setPerspective(e.target.checked)}
        />
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
  );
}
