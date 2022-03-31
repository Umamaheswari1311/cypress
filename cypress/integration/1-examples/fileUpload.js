
describe('FileUpload',function(){
  
    beforeEach(function(){
        //URL Launch
        
        cy.visit('https://the-internet.herokuapp.com/upload')
        
        })
        
        it('SingleFileUpload',()=>{
            cy.get('#file-upload').attachFile('image.PNG')
            cy.get('#file-upload').attachFile({filePath:"image.PNG",fileName: 'logo'})
            cy.get('#file-submit').click()
            cy.get('#uploaded-files').contains('logo')
        })

        it('DragAndDropFileUpload',()=>{
           
            cy.get('#drag-drop-upload').attachFile({filePath:"image.PNG",fileName: 'logo'}, { subjectType: 'drag-n-drop' });
            
        })   
        




        //Not working
        /* it('MultipleFileUpload',()=>{
           
            y.get('#drag-drop-upload').attachFile(['image.PNG', 'Capture.PNG'], { subjectType: 'drag-n-drop' });
            
        })   */
           
})