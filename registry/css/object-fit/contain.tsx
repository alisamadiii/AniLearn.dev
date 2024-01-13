import { PreviewWrapper } from "@/components/Wrapper";
import { Box } from "@/components/box";
import Checkbox from "@/components/checkbox";
import Label from "@/components/label";
import Image from "next/image";
import React, { type ChangeEvent, useState } from "react";

export default function Contain() {
  const [value, setValue] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  return (
    <PreviewWrapper className="flex flex-col items-center justify-center gap-4">
      <Box className="h-24 w-48">
        <Image
          src="/my-image.png"
          width={300}
          height={300}
          className={`h-full w-full ${value && "object-contain"}`}
          alt="my-image"
        />
      </Box>
      <Label>
        <Checkbox checked={value} onChange={onChangeHandler} />
        Activate
      </Label>
    </PreviewWrapper>
  );
}
