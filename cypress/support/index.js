require('cypress-grep')()


import "cypress-ntlm-auth/dist/commands";
import './commands'
import addContext from "mochawesome/addContext";
import 'cypress-xpath';
import sqlServer from 'cypress-sql-server';
import '@bahmutov/cy-api/support';
import failOnConsoleError, { consoleType } from 'cypress-fail-on-console-error';
// Alternatively you can use CommonJS syntax:
// require('./commands')

sqlServer.loadDBCommands();

Cypress.on("test:after:run", (test, runnable) => {  
  if (test.state === "failed") {    
    const screenshot       =`assets/${Cypress.spec.name}/${runnable.parent.title} --       ${test.title} (failed).png`;    
addContext({ test }, screenshot);  
  }
});

 //ignore uncaught Exception
 Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
}) 


 /*  Cypress.on("window:before:load",(win)=>
 {
 cy.stub(win.console,"error").callsFake((err) =>
 {
   cy.now("task","error",err)
   throw new Error(err)
 })
 }) */

/*  const config = {
     excludeMessages: ['foo', '^some bar-regex.*'],
     includeConsoleTypes: [
         consoleType.ERROR,
         consoleType.WARN,
         consoleType.INFO,
     ],
 };
 
 failOnConsoleError(config); */

 