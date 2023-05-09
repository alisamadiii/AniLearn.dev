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
  Paragraph,
} from "@components/Tech/Typography_Tech";
import { Range } from "@components/Tech/Range";

export default function Filter_Page({}: Props) {
  const [image, setImage] = useState<null | string>(null);
  const [landscape, setLandscape] = useState<boolean>(true);
  // Filters State Management
  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [saturate, setSaturate] = useState(100);
  const [brightness, setBrightness] = useState(100);

  const IMAGE =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

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

      <Heading_2 margin={true}>Working Place</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      <div className="flex flex-col items-center gap-4 my-12">
        <input
          type="url"
          placeholder="https://"
          id="website"
          value={image || ""}
          onChange={(e) => setImage(e.target.value)}
          className="w-full max-w-[600px] p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
        />
        <small>Add you own Image URL</small>

        <select
          name=""
          id=""
          className="p-2 rounded-md outline-none bg-button"
          onInput={(e: any) =>
            e.target.value == "portrait"
              ? setLandscape(false)
              : setLandscape(true)
          }
        >
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
        </select>

        {/* Image Comparison */}
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src={image || IMAGE} alt="Image one" />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={image || IMAGE}
              alt="Image two"
              style={{
                filter: `blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) brightness(${brightness}%) saturate(${saturate}%)`,
              }}
            />
          }
          className={`w-full max-w-[600px] mx-auto object-cover rounded-lg duration-200 ${
            landscape ? "aspect-video" : "aspect-[3/4]"
          }`}
        />
      </div>

      {/* Code */}
      <div className="relative w-full p-4 border rounded-lg rounded-tl-none bg-box border-white-low-opacity">
        <small className="absolute top-0 left-0 px-4 py-1 text-white -translate-y-full bg-gradient-to-l from-primary to-secondary rounded-t-md">
          Code
        </small>
        <code>
          filter: blur({blur}px) contrast({contrast}%) grayscale({grayscale}
          %) hue-rotate({hueRotate}deg) brightness({brightness}%) saturate(
          {saturate});
        </code>
      </div>

      {/* Range */}
      <div className="mt-12 space-y-5">
        <Range
          maxNum={100}
          filterName="Blur"
          value={blur}
          onChange={(e) => setBlur(Number(e.target.value))}
        />
        <Range
          maxNum={300}
          filterName="Contrast"
          value={contrast}
          onChange={(e) => setContrast(Number(e.target.value))}
        />
        <Range
          maxNum={300}
          filterName="Grayscale"
          value={grayscale}
          onChange={(e) => setGrayscale(Number(e.target.value))}
        />
        <Range
          maxNum={360}
          filterName="Hue-Rotate"
          value={hueRotate}
          onChange={(e) => setHueRotate(Number(e.target.value))}
        />
        <Range
          maxNum={100}
          filterName="Saturate"
          value={saturate}
          onChange={(e) => setSaturate(Number(e.target.value))}
        />
        <Range
          maxNum={100}
          filterName="Brightness"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
      </div>
    </Container>
  );
}
