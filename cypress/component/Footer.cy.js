import React from "react";

import Footer from "../../components/footer/Footer";

describe("it should test the button", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  it("should test the button component exists", () => {
    cy.get(".gtr-title").should(
      "have.text",
      "© 2023 Zapp's Equipment inventory"
    );
  });
});
