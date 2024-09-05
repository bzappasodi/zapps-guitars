import ToggleEquipment from "../../components/toggleEquipment/ToggleEquipment";

describe("ToggleEquipment Component", () => {
  beforeEach(() => {
    const radioButtonSelection = "amps";
    const toggleEquipmentSelection = cy.stub().as("toggleEquipmentSelection");

    cy.mount(
      <ToggleEquipment
        radioButtonSelection={radioButtonSelection}
        toggleEquipmentSelection={toggleEquipmentSelection}
      />
    );
  });

  it("should have the correct radio button selected based on props", () => {
    cy.get('input[type="radio"][value="amps"]').should("be.checked");
    cy.get('input[type="radio"][value="guitars"]').should("not.be.checked");
  });

  it('should call toggleEquipmentSelection with the correct value when "Amps" is selected', () => {
    cy.get('input[type="radio"][value="guitars"]').click();
    cy.get("@toggleEquipmentSelection").should(
      "have.been.calledWith",
      Cypress.sinon.match.has(
        "target",
        Cypress.sinon.match.has("value", "guitars")
      )
    );
  });

  it('should call toggleEquipmentSelection with the correct value when "Guitars" is selected', () => {
    cy.get('input[type="radio"][value="guitars"]').click();
    cy.get("@toggleEquipmentSelection").should(
      "have.been.calledWith",
      Cypress.sinon.match.has(
        "target",
        Cypress.sinon.match.has("value", "guitars")
      )
    );
  });

  it('should change selection when the "Guitars" radio button is clicked', () => {
    cy.get('input[type="radio"][value="amps"]').click().should("be.checked");
    cy.get('input[type="radio"][value="guitars"]').should("not.be.checked");
    cy.get('input[type="radio"][value="guitars"]').click({ force: true });
    cy.get("@toggleEquipmentSelection").should(
      "have.been.calledWith",
      Cypress.sinon.match.has(
        "target",
        Cypress.sinon.match.has("value", "guitars")
      )
    );
  });
});
