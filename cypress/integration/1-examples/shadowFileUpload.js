/// <reference types="cypress" />
import 'cypress-iframe'

describe('FileUpload',function(){
  
    beforeEach(function(){
        //URL Launch
        
        //cy.visit('https://demoqa.com/automation-practice-form')
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        })
        
        it('Shodaow-SingleFileUpload',()=>{          
           // cy.get('#uploadPicture').attachFile({filePath:"image.PNG",fileName: 'logo'})
cy.get('.smart-file-upload-header button',{includeShadowDom:true,}).should('have.text','Browse')
cy.get('.smart-file-upload-header button',{includeShadowDom:true,}).attachFile(['image.PNG', 'Capture.PNG'])
       
})
})