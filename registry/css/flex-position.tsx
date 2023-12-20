import { PreviewWrapper } from "@/components/Wrapper";
import { Box } from "@/components/box";
import React from "react";

export default function FlexPosition() {
  return (
    <PreviewWrapper>
      <Box className="flex h-96 flex-col items-center justify-center">
        <h3 className="text-2xl font-medium">Hover Me</h3>
        <p className="text-sm text-muted">Not available for phone</p>
      </Box>
    </PreviewWrapper>
  );
}
