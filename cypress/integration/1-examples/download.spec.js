describe('Download',function(){
  
    beforeEach(function(){
        //URL Launch
        
        cy.visit('https://the-internet.herokuapp.com/download')
        
        })
        
        it('Download-TextFile',()=>{
           cy.downloadFile('https://the-internet.herokuapp.com/download/','cypress/fixtures/Download','Appium_setup.txt')
           cy.readFile('cypress/fixtures/Download/Appium_setup.txt').should('contains','uiautomator')
        })
    })