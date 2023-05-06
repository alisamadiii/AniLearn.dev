import Container from "@layouts/Container";
import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

type Props = {};

import {
  Heading_1,
  Heading_2,
  Heading_3,
  Paragraph,
} from "@components/Tech/Typography_Tech";

export default function Z_Index({}: Props) {
  // Filters State Management
  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);

  return (
    <Container className="pt-12 pb-20">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        filter
      </small>

      <Heading_1>Filter Image</Heading_1>
      <Paragraph>
        The filter CSS property applies graphical effects like blur or color
        shift to an element. Filters are commonly used to adjust the rendering
        of images, backgrounds, and borders.
      </Paragraph>

      {/* Image Comparison */}
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="Image two"
            style={{
              filter: `blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg)`,
            }}
          />
        }
        className="w-full max-w-[600px] my-12 mx-auto rounded-lg"
      />

      {/* Code */}
      <div className="relative w-full p-4 border rounded-lg rounded-tl-none bg-box border-white-low-opacity">
        <small className="absolute top-0 left-0 px-4 py-1 text-white -translate-y-full bg-gradient-to-l from-primary to-secondary rounded-t-md">
          Code
        </small>
        <code>
          filter: blur({blur}px) contrast({contrast}%) grayscale({grayscale}
          %) hue-rotate({hueRotate}deg);
        </code>
      </div>

      {/* Range */}
      <div className="mt-12 space-y-5">
        <Range maxNum={100} filterName="Blur" value={blur} setValue={setBlur} />
        <Range
          maxNum={300}
          filterName="Contrast"
          value={contrast}
          setValue={setContrast}
        />
        <Range
          maxNum={300}
          filterName="Grayscale"
          value={grayscale}
          setValue={setGrayscale}
        />
        <Range
          maxNum={360}
          filterName="Hue-Rotate"
          value={hueRotate}
          setValue={setHueRotate}
        />
      </div>
    </Container>
  );
}

type RangeProps = {
  maxNum: number;
  filterName: string;
  value: number;
  setValue: (a: number) => void;
};

const Range = ({ maxNum, filterName, value, setValue }: RangeProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="basis-[200px]">{filterName}</p>
      <div className="grow basis-[500px] range-slider">
        <input
          className="range-slider__range"
          type="range"
          value={value}
          max={maxNum}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <span className="range-slider__value">{value}</span>
      </div>
    </div>
  );
};
