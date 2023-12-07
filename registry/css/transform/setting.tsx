import React, { type ChangeEvent, useState } from "react";
import { motion } from "framer-motion";

import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { useTransformStore } from "@/context";
import useMeasure from "react-use-measure";

export default function TransformSetting() {
  const { setImage, image } = useTransformStore();
  const [imageResponse, setImageResponse] = useState<null | number>(null);

  const [ref, bound] = useMeasure();

  const onChangeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length === 0) {
      setImageResponse(null); return;
    }

    // eslint-disable-next-line
    isImageUrl(value).then((isValid) => {
      if (isValid) {
        setImage({ ...image, url: value });
        setImageResponse(200);
      } else {
        setImage({ ...image, url: null });
        setImageResponse(404);
      }
    });
    // eslint-enable
  };

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 w-full max-w-[350px] -translate-x-1/2 overflow-hidden bg-box/80 backdrop-blur"
      animate={{ height: bound.height }}
    >
      <aside ref={ref} className="rounded px-4 py-2">
        <label className="flex select-none items-center gap-2 rounded">
          <Checkbox
            checked={image.isImage}
            onChange={(e) => {
              setImage({ ...image, isImage: e.target.checked });
              setImageResponse(null);
            }}
          />
          Image
        </label>
        <p className="text-xs text-muted">Test with an image</p>
        {image.isImage && (
          <Input
            placeholder="url"
            className={`mt-4 w-full ${
              imageResponse === 200
                ? "border-green-500 focus:border-green-700"
                : imageResponse === 404 && "border-red-500 focus:border-red-700"
            }`}
            onChange={onChangeHandler} // eslint-disable-line
          />
        )}
        {imageResponse && (
          <small
            className={`${
              imageResponse === 200 ? "text-green-500" : "text-red-500"
            }`}
          >
            {imageResponse === 200 ? "Valid" : "Not Valid"} Image
          </small>
        )}
      </aside>
    </motion.div>
  );
}

// Function to check if a URL points to a valid image
async function isImageUrl(url: string) {
  try {
    const response = await fetch(url, { method: "HEAD" });

    // Check if the response is successful (status code 2xx) and if the content type starts with 'image/'
    if (response.ok) {
      const contentType = response.headers.get("content-type");
      return contentType && contentType.startsWith("image/");
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
