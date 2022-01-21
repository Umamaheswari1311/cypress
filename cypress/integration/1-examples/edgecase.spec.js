
/// <reference types="cypress" />

context('BookStore',() =>{  

    specify('GetBooks',() =>{
    cy.request({
        method: 'GET',
        url:'https://demoqa.com/BookStore/v1/Books'}).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(response.body)
            cy.log(JSON.stringify(response.body))
        })
    })
    specify('Mock-GetBooks',() =>{
      cy.intercept('https://demoqa.com/BookStore/v1/Books',{fixure:'books.json'}).as ('emptyBookList');
      cy.visit('https://demoqa.com/books');
      cy.wait('@emptyBookList').then(response =>{
             cy.log(response)
             cy.log(response.status)
           })
            })
        })
    

     