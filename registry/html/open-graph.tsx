import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

export default function OpenGraph() {
  return (
    <div>
      <form action="">
        <label className="mx-auto grid w-full max-w-md grid-cols-3 gap-4">
          <Input placeholder="url" className="col-span-2" />
          <Button>Get</Button>
        </label>
      </form>
    </div>
  );
}
