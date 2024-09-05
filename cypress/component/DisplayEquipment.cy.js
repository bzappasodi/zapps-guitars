import React from "react";
import DisplayEquipment from "../../components/displayEquipment/DisplayEquipment";
import GuitarHooks from "../../components/hooks/GuitarHooks";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";


describe("DisplayEquipment Component", () => {
  const mockStore = configureStore();
  let store;

  const mockEquipment = {
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

  beforeEach(() => {
    // Mocking the GuitarHooks to return a specific radioButtonSelection
    cy.stub(GuitarHooks, "default").returns({ radioButtonSelection: "amps" });

    store = mockStore("foo");
    <Provider store={store}>
      cy.mount(
      <DisplayEquipment equipment={mockEquipment} />
      );
    </Provider>;
  });

  it("should render the equipment card with correct data", () => {
    cy.get(".card").should("exist");
    cy.get("a").should("have.attr", "href", `/details/${mockEquipment.id}`);
    cy.get("img")
      .should("have.attr", "src", `/inventory/${mockEquipment.image}`)
      .and("have.attr", "alt", "amps")
      .and("have.attr", "width", "272")
      .and("have.attr", "height", "212");
    cy.get(".card-text").should(
      "contain",
      `${mockEquipment.year} ${mockEquipment.name}`
    );
  });

  it("should adjust image height based on radioButtonSelection", () => {
    cy.get("img").should("have.attr", "height", "212");

    // Change radioButtonSelection to "guitars" and re-mount component
    GuitarHooks.default.returns({ radioButtonSelection: "guitars" });
    cy.mount(<DisplayEquipment equipment={mockEquipment} />);

    cy.get("img").should("have.attr", "height", "595");
  });

  it.only("should navigate to the correct details page when the card is clicked", () => {
    cy.get("a").click();
    cy.url().should("include", `/details/${mockEquipment.id}`);
  });
});
