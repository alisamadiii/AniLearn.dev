import React, { ReactNode, useState } from "react";
import Workplace, { BringChanges, LiveChanges } from "..";
import { AnimatePresence, motion } from "framer-motion";

import SaveNotification from "@components/SaveNotification";
import GivingComment from "@components/Comment";

import {
  hexToRGB,
  hexToHSL,
  getContrastTextColor,
  generateTailwindColorGradient,
} from "@utils/ColorConverter";

type Props = {};

const DefaultColor = "#8000FF";

export default function ColorsConverter({}: Props) {
  const [customColor, setCustomColor] = useState("#666af6");
  const [inputError, setInputError] = useState<null | string>(null);

  const errorFunction = (e: any) => {
    const { value } = e.target;
    value.length < 7 || value.length > 7
      ? setInputError("Your hex code must contains 6 characters")
      : setInputError(null);
  };

  return (
    <Workplace>
      <BringChanges className="flex flex-col items-center">
        <label htmlFor="" className="w-full max-w-input">
          <input
            type="text"
            placeholder="#ffffff"
            value={customColor}
            onChange={(e) => {
              const { value } = e.target;
              setCustomColor(value.includes("#") ? value : `#${value}`);
              errorFunction(e);
            }}
            className="w-full p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
          />
          {customColor && (
            <motion.small
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-block"
            >
              {inputError}
            </motion.small>
          )}
        </label>
      </BringChanges>
      <motion.div layout>
        <LiveChanges>
          <div className="w-full mx-auto mt-8 space-y-4 max-w-input">
            <ConvertingColor
              name="RGBA"
              color={customColor}
              convertFunction={hexToRGB}
            />
            <ConvertingColor
              name="HSL"
              color={customColor}
              convertFunction={hexToHSL}
            />
            <GivingComment
              comment={`Your text must be ${getContrastTextColor(
                customColor
              )} to match with the background.`}
            >
              <ConvertingColor
                name="Text Color"
                color={customColor}
                convertFunction={getContrastTextColor}
              />
            </GivingComment>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 text-sm md:flex-row">
            {generateTailwindColorGradient(colorNameArg(customColor)).map(
              (color, index) => (
                <Colors
                  key={index}
                  color={color}
                  index={index}
                  getContrastTextColor={getContrastTextColor}
                />
              )
            )}
          </div>
        </LiveChanges>
      </motion.div>
    </Workplace>
  );
}

type ColorProps = {
  color: string;
  getContrastTextColor: any;
  index: number;
};

export const Colors = ({ color, getContrastTextColor, index }: ColorProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const onClickHandler = () => {
    setIsSaved(true);
    navigator.clipboard.writeText(color);

    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };

  return (
    <>
      <div
        className={`flex items-end pb-4 justify-center w-full md:text-[1vw] xl:text-base h-24 basis-[70px] transition-colors duration-200`}
        style={{
          background: color,
          color: getContrastTextColor(color),
          transitionDuration: `${index * 0.2}s`,
        }}
        onClick={onClickHandler}
      >
        {color.replace("#", "")}
      </div>
      <AnimatePresence>
        {isSaved && <SaveNotification name={`Saved - ${color}`} />}
      </AnimatePresence>
    </>
  );
};

type ConvertingColorProps = {
  name: string;
  color: string;
  convertFunction: (a: string) => ReactNode;
};

export const ConvertingColor = ({
  name,
  color,
  convertFunction,
}: ConvertingColorProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const onClickHandler = () => {
    setIsSaved(true);
    const convertedColor: any = convertFunction(colorNameArg(color));
    navigator.clipboard.writeText(convertedColor);

    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };

  return (
    <>
      <p
        onClick={onClickHandler}
        className="flex justify-between p-2 border rounded-md bg-box border-white-low-opacity hover:bg-green-950/30"
      >
        {name}: <span>{convertFunction(colorNameArg(color))}</span>
      </p>
      <AnimatePresence>
        {isSaved && (
          <SaveNotification
            name={`Saved - ${convertFunction(colorNameArg(color))}`}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const colorNameArg = (color: string) => {
  return color.length <= 6 || color.length >= 8 ? DefaultColor : color;
};
