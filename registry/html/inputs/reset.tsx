import { PreviewWrapper } from "@/components/Wrapper";
import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

export default function Text() {
  return (
    <PreviewWrapper className="space-y-4">
      <form className="flex flex-col gap-3">
        <Input type="text" placeholder="first" />
        <Input type="email" placeholder="last" />
        <Button className="w-72 rounded bg-red-600 py-2" type="reset">
          Reset
        </Button>
      </form>
    </PreviewWrapper>
  );
}
