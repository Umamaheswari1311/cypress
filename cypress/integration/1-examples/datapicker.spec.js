/// <reference types="cypress" />

beforeEach(()=>{

    cy.visit('https://www.spicejet.com/')   
    cy.viewport(1024,600)
 
  })
  
  context('Spicejet-site',()=>
  {
  
  specify('Datapicker',()=>{
    cy.get("svg[viewBox$='0 0 16 16'] > path").first().click({force: true})
    cy.get("svg[width$='50'] path").first().click({force: true})
    cy.get("div[data-testid*='April'] [data-testid*='18']").click({force: true})
  })

  })