import React from "react";
import "@testing-library/jest-dom";
import ToggleEquipment from "../toggleEquipment/ToggleEquipment";
import { render, screen } from "@testing-library/react";

describe("ToggleEquipment", () => {
  it("it should check the ToggleEquipment choices", () => {
    const props = {
      toggleEquipmentSelection: "amps",
      radioButtonSelection: "amps",
    };
    render(<ToggleEquipment {...props} />);

    const whatever = screen.getByDisplayValue("guitars", { selector: "input" });

    expect(whatever).toBeInTheDocument();
  });
});
