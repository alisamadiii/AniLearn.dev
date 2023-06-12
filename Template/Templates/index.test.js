const { capitalizeWord } = require("./index");
const { TemplateTSX } = require("./TSX");

const DEFAULT_TESTING = "flex-position";

test("flex-position -> FlexPosition for exporting file", () => {
  expect(capitalizeWord(DEFAULT_TESTING)).toBe("FlexPosition");
});

test("the length of TemplateTSX must be greater than 1000 letters", () => {
  expect(
    TemplateTSX(DEFAULT_TESTING, "css", "Ali Reza").length
  ).toBeGreaterThan(1000);
});

test("The template must import react", () => {
  expect(TemplateTSX(DEFAULT_TESTING, "css", "Ali Reza")).toMatch(
    /import React from "react"/
  );
});
