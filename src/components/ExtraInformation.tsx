import Container from "@layouts/Container";
import React from "react";

import { AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

type Props = {};

export default function ExtraInformation({}: Props) {
  return (
    <Container className="pt-8 border-t-2 border-white-low-opacity dark:border-white-low-opacity-d">
      <h2 className="mb-1 text-3xl font-bold text-black dark:text-white">Contact Us</h2>
      <p className="mb-6">If you have any questions, you can reach out to us through these three platforms.</p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:webdeve1083@gmail.com"
          className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-secondary/5 to-background-clr dark:to-background-clr-d border-white-low-opacity dark:border-white-low-opacity-d hover:border-secondary dark:hover:border-secondary">
          <p className="p-2 text-xl rounded-md text-secondary bg-secondary/10">
            <AiOutlineMail />
          </p>
          <h3 className="mt-2 text-xl">Email</h3>
          <p>webdeve1083@gmail.com</p>
        </a>
        <a
          href="https://twitter.com/Ali_Developer05"
          target="_blank"
          className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-secondary/5 to-background-clr dark:to-background-clr-d border-white-low-opacity dark:border-white-low-opacity-d hover:border-secondary dark:hover:border-secondary">
          <p className="p-2 text-xl rounded-md text-secondary bg-secondary/10">
            <AiOutlineTwitter />
          </p>
          <h3 className="mt-2 text-xl">Twitter</h3>
          <p>@Ali_Developer05</p>
        </a>
        <a
          href="https://www.linkedin.com/in/alireza17/"
          target="_blank"
          className="flex flex-col items-start p-4 border rounded-md grow basis-80 bg-gradient-to-t from-secondary/5 to-background-clr dark:to-background-clr-d border-white-low-opacity dark:border-white-low-opacity-d hover:border-secondary dark:hover:border-secondary">
          <p className="p-2 text-xl rounded-md text-secondary bg-secondary/10">
            <AiFillLinkedin />
          </p>
          <h3 className="mt-2 text-xl">LinkedIn</h3>
          <p>@Ali Reza</p>
        </a>
      </div>
    </Container>
  );
}
