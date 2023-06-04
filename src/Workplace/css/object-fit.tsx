import React, { useState } from "react";
import Workplace, { LiveChanges, BringChanges } from "../";
import Input from "@components/Tech/Input";
import Checkbox from "@components/Checkbox";
import GivingComment from "@components/Comment";
import SaveButton from "@components/SaveButton";
import Image from "next/image";

type Props = {};

export default function ObjectFit({}: Props) {
  const [image, setImage] = useState<string | null>(null);

  const [width, setWidth] = useState(384);
  const [height, setHeight] = useState(240);
  const [objectFit, setObjectFit] = useState<any>("fill");

  const IMAGE =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

  const Content = `object-fit: ${objectFit};`;

  return (
    // All your code must be inside the Workplace for writing a clean codes
    // You can utility classes. (optional)

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

      <LiveChanges className="flex justify-center">
        <div
          className="overflow-hidden duration-200 border rounded-lg bg-box border-white-low-opacity"
          style={{ width, height }}
        >
          <Image
            src={image || IMAGE}
            width={400}
            height={300}
            alt="object-fit"
            className="w-full h-full"
            style={{ objectFit }}
          />
        </div>
      </LiveChanges>
      <BringChanges className="mt-12 space-y-6">
        <div className="flex flex-col items-start mx-auto max-w-playground">
          <h2 className="text-xl text-white">Parent</h2>
          <Input
            name="Width"
            unit="px"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
          <Input
            name="Height"
            unit="px"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="mx-auto max-w-playground">
          <h2 className="mb-4 text-xl text-white">Children</h2>
          <GivingComment comment={`object-fit: ${objectFit};`}>
            <div className="flex flex-wrap gap-8">
              <Checkbox
                name="Fill"
                checked={objectFit == "fill" ? true : false}
                onChange={() => setObjectFit("fill")}
              />
              <Checkbox
                name="Contain"
                checked={objectFit == "contain" ? true : false}
                onChange={() => setObjectFit("contain")}
              />
              <Checkbox
                name="Cover"
                checked={objectFit == "cover" ? true : false}
                onChange={() => setObjectFit("cover")}
              />
            </div>
          </GivingComment>
          <SaveButton content={Content} margin={true} />
        </div>
      </BringChanges>
    </Workplace>
  );
}
