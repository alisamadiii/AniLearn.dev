import React, { type ChangeEvent, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { PreviewWrapper } from "@/components/Wrapper";
import { buttonVariants } from "@/components/button";

import { BsImage } from "react-icons/bs";
import Image from "next/image";
import Video from "@/components/video";
import { BarLoader } from "react-spinners";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function File() {
  const [file, setFile] = useState<null | File>(null);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const uploadingHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const changingPageHandler = (action: "next" | "prev") => {
    if (action === "next") {
      setPageNumber(pageNumber + 1);
    } else if (action === "prev") {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <PreviewWrapper className="space-y-4" comment="image, video, and pdf">
      <label className="flex w-32">
        <input type="file" className="hidden" onChange={uploadingHandler} />
        <div
          className={buttonVariants({
            className: "flex items-center justify-center gap-2 bg-blue-700",
          })}
        >
          <BsImage />
          Upload
        </div>
      </label>
      {file &&
        (file.type.includes("image") ? (
          <Image
            src={URL.createObjectURL(file)}
            width={600}
            height={400}
            alt="upload-image"
            className="w-full rounded-md"
          />
        ) : file.type.includes("video") ? (
          <Video url={URL.createObjectURL(file)} />
        ) : file.type.includes("application/pdf") ? (
          <div className="h-[700px] w-full md:h-[1000px]">
            <div className="grid grid-cols-3 items-center py-4">
              <div>
                <button
                  onClick={() => {
                    changingPageHandler("prev");
                  }}
                  className="rounded-full p-2 hover:bg-muted/20 active:bg-muted/30 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={pageNumber === 1}
                >
                  <IoIosArrowBack />
                </button>
              </div>
              <p className="text-center">
                {pageNumber} of {numPages}
              </p>
              <div className="flex items-center justify-end">
                <button
                  onClick={() => {
                    changingPageHandler("next");
                  }}
                  className="rounded-full p-2 hover:bg-muted/20 active:bg-muted/30 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={pageNumber === numPages}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <Document
              file={URL.createObjectURL(file)}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="mt-8 flex w-full justify-center">
                  <BarLoader color="white" />
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        ) : (
          <div>Format not accepted</div>
        ))}
    </PreviewWrapper>
  );
}
