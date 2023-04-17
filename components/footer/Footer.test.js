import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../footer/Footer";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", {
      name: "© 2023 Zapp's Equipment inventory",
    });
    expect(heading).toBeInTheDocument();
  });
});
