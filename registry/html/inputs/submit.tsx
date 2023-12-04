import { PreviewWrapper } from "@/components/Wrapper";
import Button from "@/components/button";
import Input from "@/components/input";
import React, { type ChangeEvent, useState } from "react";

export default function Text() {
  const [value, setValue] = useState({ first: "", last: "", visible: false });

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as any;

    const first = target[0].value;
    const last = target[1].value;

    setValue({ first, last, visible: true });

    event.currentTarget.reset();
  };

  return (
    <PreviewWrapper className="space-y-4">
      <form className="flex flex-col gap-3" onSubmit={submitHandler}>
        <Input type="text" placeholder="first" />
        <Input type="text" placeholder="last" />
        <Button className="w-72 rounded py-2">Submit</Button>
      </form>
      {value.visible && (
        <div>
          <p className="text-muted">
            First:{" "}
            <span className="text-foreground">{value.first ?? "..."}</span>
          </p>
          <p className="text-muted">
            Last: <span className="text-foreground">{value.last ?? "..."}</span>
          </p>
        </div>
      )}
    </PreviewWrapper>
  );
}
