/// <reference types="@bahmutov/cy-api" />
let userid =1
let username='ere'
describe('ApiTesting',{'baseUrl':'https://demoqa.com'},()=>{

    it('Post-UserCreation',function()
    {
    cy.api({
        url:'/Account/v1/User',
        method:'POST',
        body:{
            userName:username,
            password:'San@2017'
        },}).then((response) => {
            expect(response).property('status').to.equal(201)
            const body = (response.body)
            userid=body['userID']
            cy.log(userid)
        })
        
    })
    it('Get-User',function()
    {
    cy.api({
        url:'/Account/v1/User/'+userid,
        auth:{
            username:username,
            password:'San@2017'
        },
        method:'GET',
        followRedirect: false,
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response.body.userId).to.eql(userid)
            expect(response.body.username).to.eql(username)
        })
    })

    it('Post-Book to user',function()
    {
    cy.api({
        url:'/BookStore/v1/Books',
        auth:{
            username:username,
            password:'San@2017'
        },
        method:'POST',
        body:{
            userId:userid,
            collectionOfIsbns:[{isbn:'9781449325862'}]
        },}).then((response) => {
            expect(response).property('status').to.equal(201)
              
        })
        
    })

    it('Delete-User',function()
    {
    cy.api({
        url:'/Account/v1/User/'+userid,
        auth:{
            username:username,
            password:'San@2017'
        },
        method:'DELETE',
        followRedirect: false,
        }).then((response) => {
            expect(response).property('status').to.equal(204)
        
        })
    })
    })
