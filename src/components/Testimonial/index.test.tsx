import { render, screen } from "@testing-library/react";
import Testimonial from ".";
import { AiOutlineTwitter } from "react-icons/ai";
import { TestimonialTypes } from "./index.types";

const MOCK_DATA: TestimonialTypes = {
  id: 1,
  name: "Andrej",
  headline: null,
  image:
    "https://pbs.twimg.com/profile_images/1510928172686225411/bTCh20YN_400x400.jpg",
  testimonial: "woah nice job with this project Ali",
  from: [AiOutlineTwitter, "twitter"],
};

describe("Testimonial", () => {
  test("render the component correctly", () => {
    render(<Testimonial testimonial={MOCK_DATA} />);

    const displayName = screen.getByRole("heading", { name: "Andrej" });
    const image = screen.getByAltText(`image - Andrej`);

    expect(displayName && image).toBeInTheDocument();
  });
});
