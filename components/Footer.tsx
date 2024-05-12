"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathname = usePathname();

  return (
    pathname !== "/" && (
      <footer className="w-full bg-box px-4">
        <div className="mx-auto max-w-7xl py-4">
          <p className="text-sm text-muted">
            Built by{" "}
            <a
              href="https://twitter.com/alirdev"
              target="_blank"
              className="text-foreground underline"
              rel="noreferrer"
            >
              Ali Reza
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/AliReza1083/AniLearn.dev"
              target="_blank"
              className="text-foreground underline"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    )
  );
}
