describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have the correct radio button selected based on props", () => {
    cy.get('input[type="radio"][value="guitars"]').should("be.checked");
    cy.get('input[type="radio"][value="amps"]').should("not.be.checked");
  });

  it("should have the footer text", () => {
    cy.get(".gtr-title").should(
      "have.text",
      "Zapp's Equipment Inventory©2024 Zapp's Equipment inventory"
    );
  });

  it("should select the first guitar for details", () => {
    cy.get(
      ":nth-child(1) > :nth-child(1) > a > .Home_card__fubC7 > img"
    ).click();

    cy.get(".container h3").should(
      "have.text",
      "1973 Gibson Les Paul Custom"
    );

    cy.url('match', 'http://localhost:3000/details/1').then(el=>{
      cy.log(el)
    })

  });

  it("should click the back to home page link", () =>{
    cy.get(
        ":nth-child(1) > :nth-child(1) > a > .Home_card__fubC7 > img"
    ).click();
    cy.get(".container a").should(
        "have.text",
        "Inventory list page →"
    );
  } )
});
