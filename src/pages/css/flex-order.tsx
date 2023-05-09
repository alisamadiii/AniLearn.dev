import { FLEX_ORDER } from "@contents/Data";
import Container from "@layouts/Container";
import React, { useState } from "react";

type Props = {};

export default function Flex_Order({}: Props) {
  const [items, setItems] =
    useState<{ id: number; order: number; name: string }[]>(FLEX_ORDER);

  return (
    <Container className="pt-12 pb-20">
      <div className="relative flex items-start w-full gap-2 p-4 mt-12 overflow-hidden border rounded-lg h-52 bg-box border-white-low-opacity">
        {items.map((rect) => (
          <div
            key={rect.id}
            className={`flex items-center justify-center w-16 h-8 text-black bg-white rounded-md order-${rect.id}`}
            style={{ order: rect.order }}
          >
            {rect.id}
          </div>
        ))}
      </div>
    </Container>
  );
}
