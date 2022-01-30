//We need plugin to handle drag and drop 

context('Different drag and drop',{'baseUrl':'https://google.com'},()=>{
    
specify('Simple-Drag and Drop',{'baseUrl':'https://kitchen.applitools.com/ingredients/drag-and-drop'},()=>{
    const er=new DataTransfer();
cy.visit('/')
 cy.get('#menu-ice-cream').drag('#plate-items')
 cy.get('#menu-fried-chicken').trigger("dragstart",{dataTransfer})
cy.get('#plate-items').trigger("drop",{dataTransfer})
cy.get('#menu-fried-chicken').trigger("dragend")
cy.get('#plate-items').contains('Fried Chicken').should('be.visible')

})

//Not Working
specify('sort-Drag and drop',{'baseUrl':'https://kitchen.applitools.com/ingredients/drag-and-drop'},()=>{
    const dataTransfer=new DataTransfer();
cy.visit('/')
 //cy.get('#sides-sweet-potatoes').drag('#sides-green-beans')
    cy.get('#sides-sweet-potatoes').trigger('dragstart');
    cy.get('#sides-green-beans')
      .trigger('dragenter', { force: true })
      .trigger('dragover', { force: true })
      .trigger('drop', { force: true })
      .wait(50)
      .trigger('dragend', { force: true });


})

specify.only('Mouse Over',{'baseUrl':'https://www.myntra.com'},()=>{
    cy.visit('/')
    Cypress.config("responseTimeout", 600000) 
    cy.get("a[href='/shop/men'][data-index='0']").trigger('mouseover')
    cy.get("a[href='/men-tshirts']").trigger('mouseover')
    
})
})