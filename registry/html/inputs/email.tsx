import { PreviewWrapper } from "@/components/Wrapper";
import Input from "@/components/input";
import React, { useEffect, useState } from "react";
import * as EmailValidator from "email-validator";

export default function Text() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<null | boolean>(null);

  useEffect(() => {
    if (value.length === 0) { setIsValid(null); return; }

    setIsValid(EmailValidator.validate(value));
  }, [value]);

  return (
    <PreviewWrapper
      comment="Hit Enter"
      className="space-y-4"
      wrapperClassName={`${
        isValid === true
          ? "border-green-700"
          : isValid === false
            ? "border-red-700 [&>div>p]:text-red-500"
            : ""
      }`}
    >
      <Input
        type="email"
        className="w-72"
        onChange={(e) => { setValue(e.target.value); }}
      />
      <p className="text-muted">
        email: <span className="text-foreground">{value ?? "..."}</span>
      </p>
    </PreviewWrapper>
  );
}
