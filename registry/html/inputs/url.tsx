import { PreviewWrapper } from "@/components/Wrapper";
import Input from "@/components/input";
import React, { useEffect, useState } from "react";

export default function Url() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<null | boolean>(null);

  useEffect(() => {
    if (value.length === 0) {
      setIsValid(null);
      return;
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const result = urlRegex.test(value);

    setIsValid(result);
  }, [value]);

  return (
    <PreviewWrapper
      className="space-y-4"
      wrapperClassName={`${
        isValid === true
          ? "border-green-700"
          : isValid === false
            ? "border-red-700"
            : ""
      }`}
    >
      <Input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p className="text-muted">
        url: <span className="text-foreground">{value ?? "..."}</span>
      </p>
    </PreviewWrapper>
  );
}
