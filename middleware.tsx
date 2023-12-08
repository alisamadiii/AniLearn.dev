import { type NextRequest, NextResponse } from "next/server";

import { allContents } from "contentlayer/generated";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/techs/")) {
    const findingContent = allContents.find(
      (content) => content.slug === pathname
    );

    if (findingContent) {
      if (findingContent.working) {
        return NextResponse.rewrite(new URL("/under-construction", req.url));
      }
    }
  }
}
