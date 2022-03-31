/// <reference types="cypress" />

context('Window Command',() =>{  

    before(()=>
    {
        cy.visit("https://en.wikipedia.org/wiki/URI_fragment#Examples")
        cy.window().should('have.property', 'appReady', true)

    })

    it("url-Properties",()=>
    {
        //yield window properties and using jquery to check the value
        cy.window().then(winObject=>{
          const win=  winObject.location
         expect(win.hash).to.eq ('#Examples')
        })
          
         //Simple Way
         cy.location('host').should('equals','en.wikipedia.org')
         cy.location('hostname').should('equals','en.wikipedia.org')
         cy.location('href').should('equals','https://en.wikipedia.org/wiki/URI_fragment#Examples')
         cy.location('protocol').should('equals','https:')

    })   
    it("url-reload",()=>
    {
        cy.window().then(winObject=>{
        winObject.location.reload
        //Simple Way
        cy.reload()
        })
   })

    it("url-Navigation",()=>
    {
        cy.xpath("//span[normalize-space()='Main page']").click()

        cy.window().then(winObject=>{
        winObject.history.back()
        winObject.history.forward()
        winObject.history.go(-1)
        winObject.history.go(1)
        })


        //Simple Way
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        cy.go(1)
    })

    it.only("Window-Storage",()=>
    {
        cy.window().then(winObject=>{
            winObject.localStorage.setItem('Title','QE Huddle')
            expect(winObject.localStorage.getItem('Title')).to.eql('QE Huddle')
        })
        cy.wait(6000)
        
        //Clear Local storage
       // cy.clearLocalStorage()
    })
})


