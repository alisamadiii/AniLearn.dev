import React from "react";

import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? "Hello World";
    const description = searchParams.get("description") ?? "Hello World";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            backgroundColor: "white",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 12,
            }}
          >
            <b>AniLearn.dev</b>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontStyle: "normal",
              color: "black",
              lineHeight: 1.8,
              fontWeight: 700,
            }}
          >
            <b>{title}</b>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <b>{description}</b>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: any) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
