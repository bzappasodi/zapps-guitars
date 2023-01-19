import React from "react";

import DisplayEquipment from "../../components/displayEquipment/DisplayEquipment";


describe("it should test the button", () =>{
    beforeEach(()=>{
        cy.mount(<DisplayEquipment />)
    });

    it('should test the button component exists',  () => {
        cy.get("button").should('have.text', 'chrissy rossi')
  })

});

