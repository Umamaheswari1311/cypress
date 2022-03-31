//We need plugin to handle drag and drop 

context('Different drag and drop',{'baseUrl':'https://demoqa.com'},()=>{
    

specify('Mouse Over',{'baseUrl':'https://www.myntra.com'},()=>{
    //
    cy.visit('/',{ headers: { "Accept-Encoding": "gzip, deflate" } })    
    cy.get("a[href='/shop/men'][data-index='0']").trigger('mouseover' )
    cy.get("a[href='/men-tshirts']").click({force: true})
    
})

specify('DoubleClick',{'baseUrl':'https://demoqa.com/buttons'},()=>{
    cy.visit('/')
    cy.get("#doubleClickBtn").dblclick()
    cy.get('#doubleClickMessage').should('contain.text','double')
})
specify('RightClick',{'baseUrl':'https://demoqa.com/buttons'},()=>{
    cy.visit('/')
    cy.get("#rightClickBtn").rightclick()
    cy.get('#rightClickMessage').should('contain.text','right')
})

specify('RightClick',{'baseUrl':'https://swisnl.github.io'},()=>{
   cy.visit('/jQuery-contextMenu/demo.html')
    cy.get("span:contains('right')").rightclick()
    cy.get("span:contains('Edit')").eq(1).click({force: true})
})

specify('RightClick',{'baseUrl':'https://swisnl.github.io'},()=>{
   cy.visit('/jQuery-contextMenu/demo/sub-menus.html')
    cy.get("span:contains('right click me')").rightclick()
    cy.get("span:contains('Sub group')").eq(0).trigger('mouseover',{force: true})
    cy.get("li[class*='submenu']").first().trigger('mouseover').click()
    cy.get("span:contains('delta')").eq(1).click()
}) 
it.only('tooltips',()=>{
    cy.visit('/')
    //Invoke jquery text method
    /* cy.get("svg[viewBox='0 0 24 24']:last-child>path").click({force: true})
    cy.get('span').contains('Tool').click()
    cy.get('#toolTipButton').invoke('text').then(getText=> {
     expect(getText).to.equal('Hover me to see')
    }) */
   //Invoke jquery show method for hidden element
   cy.get('#toolTipButton').trigger('mouseover').invoke('show')
  cy.contains('You hovered over the Button')    
}) 


























specify('Simple-Drag and Drop',{'baseUrl':'https://kitchen.applitools.com/ingredients/drag-and-drop'},()=>{
    const dataTransfer=new DataTransfer();
cy.visit('/')
 //cy.get('#menu-ice-cream').drag('#plate-items')
 //Another
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
})