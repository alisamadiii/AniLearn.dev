import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  test("render the component correctly", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");
    const h1Element = screen.getByRole("heading", { level: 1 });

    expect(h1Element).toBeInTheDocument();
    expect(links).toHaveLength(6);
  });
});
