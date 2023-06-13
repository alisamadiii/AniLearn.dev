import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

import Navbar_Tech from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Navbar", () => {
  test("render the component correctly", () => {
    // @ts-expect-error
    useRouter.mockReturnValue({
      query: {},
      push: () => {},
    });

    const isNavbar = false;
    const setIsNavbar = jest.fn();

    const { container } = render(
      <Navbar_Tech isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
    );
    const link = screen.getByRole("link", { name: "AniLearn.dev" });
    const liElements = container.querySelectorAll("li");

    expect(link).toBeInTheDocument();
    expect(liElements).toHaveLength(2);
  });
});
