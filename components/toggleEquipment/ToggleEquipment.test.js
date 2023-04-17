import React from "react";
import "@testing-library/jest-dom";
import ToggleEquipment from "../toggleEquipment/ToggleEquipment";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a ToggleEquipment", () => {
    const props = {
      toggleEquipmentSelection: "amps",
      radioButtonSelection: "amps",
    };
    render(<ToggleEquipment {...props} />);
    const whatever = screen.getByLabelText("Amps", { selector: "input" });
    expect(whatever).toBeInTheDocument();
  });
});
