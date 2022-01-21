/// <reference types="cypress" />
import 'cypress-iframe'

describe('FileUpload',function(){
  
    beforeEach(function(){
        //URL Launch
        
        cy.visit('https://books-pwakit.appspot.com/')
       
        
        })
        
        it('Shodaow-DOM Handling1',()=>{ 

            //cy.get('book-app').shadow().find('app-toolbar book-input-decorator input').type('testing')   
            
       })
        it.only('Shodaow-DOM Handling2',()=>{ 

            
             cy.get('book-input-decorator input',{includeShadowDom:true}).type('testing')   
       })

       it('Shodaow-DOM Handling3',()=>{ 

            //"includeShadowDom":true in cypress.json
             cy.get('book-input-decorator input').type('testing')   
       })


})