import React, { useState } from "react";
import Image from "next/image";

import Wrapper from "@/components/Wrapper";
import { cn, showcaseImage } from "@/utils";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export default function AspectRatio() {
  const [fixedHeight, setFixedHeight] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("1/1");

  const onChangeHandler = (value: string) => {
    // Remove any characters that are not numbers or /
    let cleanedValue = value.replace(/[^0-9/ ]/g, "");

    console.log(cleanedValue.indexOf("/"));

    if (cleanedValue.indexOf("/") !== -1) {
      cleanedValue = value.replace(/[^0-9/]/g, "");
    }

    cleanedValue = cleanedValue.replace(/\s/g, "/");

    setAspectRatio(cleanedValue);
  };

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div>
          <Input
            value={aspectRatio}
            onChange={(event) => onChangeHandler(event.target.value)}
            disabled={fixedHeight}
          />
          <p className="mt-1 text-xs">Click space to add &quot;/&quot;.</p>
        </div>
        <label className="flex items-center gap-2">
          Fixed Height
          <Switch checked={fixedHeight} onCheckedChange={setFixedHeight} />
        </label>
      </div>
      <Wrapper className="resize-x">
        <div className="max-w-sm">
          <Image
            src={showcaseImage}
            width={800}
            alt="image"
            height={1200}
            className={cn("rounded-xl object-cover", fixedHeight ? "h-96" : "")}
            style={{ aspectRatio: fixedHeight ? undefined : aspectRatio }}
          />
        </div>
      </Wrapper>
    </div>
  );
}
