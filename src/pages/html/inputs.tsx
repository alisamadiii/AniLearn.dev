import React from "react";

import Workplace, { LiveChanges } from "@components/Tech/Workplace";
import CodeBlocks from "@components/Tech/CodeBlocks";
import Information from "@components/Tech/Information";
import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";

type Props = {};

export default function InputTesting({}: Props) {
  const Codes = `<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">`;

  return (
    <>
      <MetaTag title="Inputs" image={null} description="" />
      <Container>
        <Information content="<h1>Input Testing</h1><p>The <code>input</code> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <code>input</code> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.</p>" />
        <CodeBlocks
          codeString={Codes}
          language="htmlbars"
          fileName="index.html"
        />
        <Workplace className="">
          <LiveChanges className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            <Input name="button" type="button" />
            <Input name="checkbox" type="checkbox" />
            <Input name="color" type="color" />
            <Input name="date" type="date" />
            <Input name="datetime-local" type="datetime-local" />
            <Input name="email" type="email" />
            <Input name="file" type="file" />
            <Input name="hidden" type="hidden" />
            <Input name="image" type="image" />
            <Input name="month" type="month" />
            <Input name="number" type="number" />
            <Input name="password" type="password" />
            <Input name="radio" type="radio" />
            <Input name="range" type="range" />
            <Input name="reset" type="reset" />
            <Input name="search" type="search" />
            <Input name="submit" type="submit" />
            <Input name="tel" type="tel" />
            <Input name="text" type="text" />
            <Input name="time" type="time" />
            <Input name="url" type="url" />
            <Input name="week" type="week" />
          </LiveChanges>
        </Workplace>
      </Container>
    </>
  );
}

type InputProps = {
  name: string;
  type: string;
};

export const Input = ({ name, type }: InputProps) => {
  return (
    <label
      htmlFor={name}
      className="grid items-center grid-cols-4 gap-6 p-4 border rounded-md shadow-sm cursor-pointer border-white-low-opacity hover:border-primary"
    >
      <span className="capitalize">{type}</span>
      <input
        type={type}
        id={name}
        className="w-full col-span-3 px-2 py-1 text-black bg-white border-2 rounded outline-none focus:border-primary"
        placeholder={type}
      />
    </label>
  );
};
