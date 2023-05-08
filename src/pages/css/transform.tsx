import Container from "@layouts/Container";
import React, { useState } from "react";

type Props = {};

import {
  Heading_1,
  Heading_2,
  Heading_3,
  Paragraph,
} from "@components/Tech/Typography_Tech";
import Image from "next/image";

export default function Transform({}: Props) {
  const [scale, setScale] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [skew, setSkew] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [perspective, setPerspective] = useState<boolean>(false);

  const IMAGE =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

  return (
    <Container className="pt-12 pb-20">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        transform
      </small>

      <Heading_1>CSS transform Property</Heading_1>
      <Paragraph>
        The transform property applies a 2D or 3D transformation to an element.
        This property allows you to rotate, scale, move, skew, etc., elements.
      </Paragraph>

      <Heading_2 margin={true}>Working Place</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      <div className="relative flex items-center justify-center w-full p-4 mt-12 overflow-hidden border rounded-lg h-52 bg-box border-white-low-opacity">
        <Image
          src={IMAGE}
          width={400}
          height={400}
          alt="Image"
          className="duration-200 rounded-md w-44"
          style={
            perspective == false
              ? {
                  transform: `scale(${
                    scale * 0.01
                  }) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg)`,
                }
              : {
                  transform: `scale(${
                    scale * 0.01
                  }) perspective(200px) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skew(${skew}deg) skewX(${skewX}deg) skewY(${skewY}deg)`,
                }
          }
        />
      </div>

      {/* Range */}
      <div className="mt-12 space-y-4">
        <label htmlFor="perspective">
          <input
            type="checkbox"
            id="perspective"
            onClick={(e: any) => setPerspective(e.target.checked)}
          />
          perspective
        </label>
        <Range
          maxNum={200}
          filterName="Scale"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
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
      </div>
    </Container>
  );
}

type RangeProps = {
  maxNum: number;
  filterName: string;
  value: number;
  onChange: (e: any) => void;
};

const Range = ({ maxNum, filterName, value, ...otherProps }: RangeProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="basis-[200px]">{filterName}</p>
      <div className="grow basis-[500px] range-slider">
        <input
          className="range-slider__range"
          type="range"
          name={filterName}
          value={value}
          max={maxNum}
          step={10}
          {...otherProps}
        />
        <span className="range-slider__value">{value}</span>
      </div>
    </div>
  );
};
