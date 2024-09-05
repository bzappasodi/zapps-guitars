import DisplayEquipmentDetails from "../../components/displayEquipmentDetails/DisplayEquipmentDetails"; // Adjust the import path

import { mount } from "cypress/react18";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store"; // Adjust the import path

describe("DisplayEquipmentDetails Component", () => {
  const mockStore = configureStore();
  let store;

  const mockSpecsOfEquipmentSelected = {
    id: 1,
    name: "Gibson Les Paul Custom",
    image: "black-les-paul.jpg",
    year: "1973",
    specs: [
      "Purchased in January 1974",
      "Date the instrument by the potentiometers, 3 of which are original and are wired modern.",
      "Potentiometer number is: 1377336. This potentiometer was made by CTS Corporation (Chicago Telephone Supply) in the 36th week (September 3, 1973 to September 9, 1973) of 1973.",
      "The neck was broken twice and in the repair process the serial number was removed.",
      "It was a Second",
      "The pickups are Seymour Duncan Antiquity JB / Jazz. They are factory not potted.",
      "It has been re-fretted numerous times.",
      "Gold Grover machines, and black speed knobs added 2016",
    ],
  };

  it("renders the equipment details with correct data", () => {
    store = mockStore("foo");
    <Provider store={store}>
      mount( specsOfEquipmentSelected={mockSpecsOfEquipmentSelected}
      );
    </Provider>;

    cy.get("h3").should("contain", "1973 Gibson Les Paul Custom");
    cy.get("ul").within(() => {
      cy.get("li").should("have.length", 3);
      cy.get("li").eq(0).should("contain", "Alder body");
      cy.get("li").eq(1).should("contain", "Maple neck");
      cy.get("li").eq(2).should("contain", "Rosewood fingerboard");
    });
  });

  it("renders the correct image with appropriate height for guitars", () => {
    store = mockStore("foo");
    <Provider store={store}>
      cy.mount( specsOfEquipmentSelected={mockSpecsOfEquipmentSelected}
      );
    </Provider>;

    cy.get("img")
      .should("have.attr", "src", "/inventory/guitar.jpg")
      .and("have.attr", "alt", "Fender Stratocaster")
      .and("have.attr", "height", "595");
  });

  it("renders the correct image height for amps", () => {
    // Update the hook mock to simulate the radioButtonSelection being "amps"
    // mockGuitarHooks.radioButtonSelection = "amps";

    mount(
      <DisplayEquipmentDetails
        specsOfEquipmentSelected={mockSpecsOfEquipmentSelected}
      />
    );

    cy.get("img")
      .should("have.attr", "src", "/inventory/guitar.jpg")
      .and("have.attr", "height", "212");
  });

  it.only("renders the inventory list link", () => {
    store = mockStore("foo");
    <Provider store={store}>
      cy.mount(
      <DisplayEquipmentDetails
        specsOfEquipmentSelected={mockSpecsOfEquipmentSelected}
      />
      );
    </Provider>;

    cy.get("a")
      .should("have.attr", "href", "/")
      .and("contain", "Inventory list page →");
  });
});
