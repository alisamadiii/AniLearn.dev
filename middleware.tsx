import { type NextRequest, NextResponse } from "next/server";

import { allLearns } from "contentlayer/generated";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/learn/")) {
    const findingContent = allLearns.find(
      (content) => content.slug === pathname
    );

    if (findingContent) {
      if (findingContent.completed === false) {
        return NextResponse.rewrite(new URL("/under-construction", req.url));
      }
    }
  } else if (
    pathname.startsWith("/components") ||
    pathname.startsWith("/resources")
  ) {
    return NextResponse.rewrite(new URL("/under-construction", req.url));
  }
}
