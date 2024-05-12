import { PreviewWrapper } from "@/components/Wrapper";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Box } from "@/components/box";

const cursorValues = [
  "auto",
  "default",
  "none",
  "context-menu",
  "help",
  "pointer",
  "progress",
  "wait",
  "cell",
  "crosshair",
  "text",
  "vertical-text",
  "alias",
  "copy",
  "move",
  "no-drop",
  "not-allowed",
  "grab",
  "grabbing",
  "e-resize",
  "w-resize",
  "n-resize",
  "s-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
];

export default function Cursor() {
  const [cursor, setCursor] = useState("auto");

  return (
    <PreviewWrapper className="space-y-4">
      <Select onValueChange={(value) => { setCursor(value); }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cursor" />
        </SelectTrigger>
        <SelectContent>
          {cursorValues.map((value, index) => (
            <SelectItem key={index} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Box
        className="flex h-96 flex-col items-center justify-center"
        style={{ cursor }}
      >
        <h3 className="text-2xl font-medium">Hover Me</h3>
        <p className="text-sm text-muted">Not available for phone</p>
      </Box>
    </PreviewWrapper>
  );
}
