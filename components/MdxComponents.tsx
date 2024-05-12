"use client";

import React, { useEffect, useRef, useState } from "react";
import { RxCopy } from "react-icons/rx";
import { TbClipboardCheck } from "react-icons/tb";

import Link from "next/link";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { cn } from "@/utils";
import ComponentPreview from "./ComponentPreview";
import CopyButton from "./copy-button";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mb-6 mt-8 scroll-m-20 border-b border-foreground/20 py-2 text-2xl font-bold tracking-tight"
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mb-6 mt-8 scroll-m-20 text-xl font-bold tracking-tight"
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mb-6 mt-8 scroll-m-20 text-lg font-medium tracking-tight"
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p className="my-5 scroll-m-20 text-base leading-7 text-muted" {...props} />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="scroll-m-20 text-base leading-7 text-blue-600 underline hover:text-blue-800 hover:no-underline"
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="my-5 scroll-m-20 pl-8 text-base leading-7 text-[#434343]"
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="relative my-1 flex items-center text-muted before:absolute before:h-1 before:w-1 before:-translate-x-5 before:rounded-full before:bg-muted"
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement> & {}) => {
    const preRef = useRef<HTMLPreElement>(null);

    const [showLess, setShowLess] = useState(false);

    useEffect(() => {
      if (preRef.current) {
        const lineCount = preRef.current.textContent?.split("\n").length || 0;

        if (lineCount >= 15) {
          setShowLess(true);
        } else {
          setShowLess(false);
        }
      }
    }, []);

    return (
      <>
        <pre ref={preRef} {...props} />
        <CopyButton value={preRef.current?.textContent || ""} />
      </>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={`rounded bg-primary px-2 py-1 text-xs text-white md:text-sm`}
      {...props}
    ></code>
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-border border-l pl-4 italic [&>p]:text-sm [&>p]:leading-6 [&>p]:text-white [&>p]:md:text-base"
      {...props}
    ></blockquote>
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  Image: ({ className, alt, ...props }: React.ComponentProps<typeof Image>) => (
    <Image className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  ComponentPreview,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
