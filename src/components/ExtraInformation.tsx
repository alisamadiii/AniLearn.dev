import Container from "@layouts/Container";
import React from "react";

import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

type Props = {};

export default function ExtraInformation({}: Props) {
  return (
    <Container className="pt-8 border-t-2 border-white-low-opacity">
      <h2 className="mb-1 text-3xl font-bold text-font-clr-1">Contact Us</h2>
      <p className="mb-6">
        If you have any questions, you can reach out to us through these three
        platforms.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:webdeve1083@gmail.com"
          className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-secondary/5 to-background-clr border-white-low-opacity hover:border-secondary"
        >
          <p className="p-2 text-xl rounded-md text-secondary bg-secondary/10">
            <AiOutlineMail />
          </p>
          <h3 className="mt-2 text-xl text-font-clr-1">Email</h3>
          <p>webdeve1083@gmail.com</p>
        </a>
        <a
          href="https://twitter.com/Ali_Developer05"
          target="_blank"
          className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-secondary/5 to-background-clr border-white-low-opacity hover:border-secondary"
        >
          <p className="p-2 text-xl rounded-md text-secondary bg-secondary/10">
            <AiOutlineTwitter />
          </p>
          <h3 className="mt-2 text-xl text-font-clr-1">Twitter</h3>
          <p>@Ali_Developer05</p>
        </a>
        <a
          href="https://www.linkedin.com/in/alireza17/"
          target="_blank"
          className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-secondary/5 to-background-clr border-white-low-opacity hover:border-secondary"
        >
          <p className="p-2 text-xl rounded-md text-secondary bg-secondary/10">
            <AiFillLinkedin />
          </p>
          <h3 className="mt-2 text-xl text-font-clr-1">LinkedIn</h3>
          <p>@Ali Reza</p>
        </a>
      </div>
    </Container>
  );
}
