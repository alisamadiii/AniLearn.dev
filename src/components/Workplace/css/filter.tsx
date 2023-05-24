import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import { Range } from "@components/Tech/Range";
import SaveButton from "@components/SaveButton";

type Props = {};

export default function Filter({}: Props) {
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
    <div>
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
        <SaveButton
          content={`filter: blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) brightness(${brightness}%) saturate(${saturate});`}
          margin={true}
        />
      </div>
    </div>
  );
}
