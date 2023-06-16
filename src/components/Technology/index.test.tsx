import { render, screen } from "@testing-library/react";
import Technology from ".";
import { AiFillHtml5 } from "react-icons/ai";

describe("Technology", () => {
  test("render the component correctly", () => {
    render(
      <Technology
        name="html"
        description="HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes."
        link="/html/inputs"
        Icon={AiFillHtml5}
      />
    );

    const pElement = screen.getByText(
      "HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes."
    );
    expect(pElement).toBeInTheDocument();
  });
});
