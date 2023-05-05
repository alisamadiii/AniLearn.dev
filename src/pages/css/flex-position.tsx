import { Heading_1, Heading_2, Heading_3 } from "@components/Headings";
import Container from "@layouts/Container";
import React, { useState } from "react";

type Props = {};

export default function Flex_Position({}: Props) {
  // First State Management
  const [justifyContent, setJustifyContent] = useState("justify-start");
  const [alignItems, setAlignItems] = useState("items-start");

  // Second State Management
  const [alignContent, setAlignContent] = useState("align-start");

  // Third State Management
  const [justifySelf, setJustifySelf] = useState("justify-self-start");
  const [alignSelf, setAlignSelf] = useState("self-start");

  return (
    <Container className="py-12">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        flex-box
      </small>

      <Heading_1 className="mt-1 mb-3 text-5xl">Flexbox Position</Heading_1>
      <p className="mb-3 text-lg font-light">
        Since flexbox is a whole module and not a single property, it involves a
        lot of things including its whole set of properties. Some of them are
        meant to be set on the container (parent element, known as “flex
        container”) whereas the others are meant to be set on the children (said
        “flex items”).
      </p>
      <p className="text-lg font-light">
        If “regular” layout is based on both block and inline flow directions,
        the flex layout is based on “flex-flow directions”. Please have a look
        at this figure from the specification, explaining the main idea behind
        the flex layout.
      </p>

      <Heading_2 className="mt-12 mb-3 text-4xl">Working Place</Heading_2>
      <p className="text-lg font-light">
        This is the place where you can try them.
      </p>

      <Heading_3 className="mt-8 text-3xl">
        justify-content & align-items
      </Heading_3>

      <Heading_3 className="mt-8 text-3xl">align-content</Heading_3>

      <Heading_3 className="mt-8 text-3xl">justify-self & align-self</Heading_3>
    </Container>
  );
}
