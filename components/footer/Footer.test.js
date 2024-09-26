import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../footer/Footer";

describe("Footer", () => {
  it("it should check the copy-rite text in the footer", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", {
      name: "© 2024 Zapp's Equipment inventory",
    });
    expect(heading).toBeInTheDocument();
  });
});
