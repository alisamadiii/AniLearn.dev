import Checkbox from "@/components/checkbox";
import { useTransformStore } from "@/context";
import React from "react";

export default function TransformSetting() {
  const { setImage, image } = useTransformStore();

  return (
    <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded bg-box/80 px-4 py-2 backdrop-blur">
      <label className="flex select-none items-center gap-2 rounded">
        <Checkbox
          checked={image}
          onChange={(e) => { setImage(e.target.checked); }}
        />
        Image
      </label>
      <p className="text-xs text-muted">Test with an image</p>
    </aside>
  );
}
