/// <reference types="cypress" />

describe('Our first suite', () => {

it('first test', () =>

{
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains('Form Layouts').click()
//by tag name 
cy.get('input')

//byid
cy.get('#inputEmail1')

//by class name
cy.get('.input-full-width')

//by attribute name
cy.get('[placeholder]')

//by attribute name and value
cy.get('[placeholder="Email"]')

//by class value
cy.get('[class="input-full-width size-medium shape-rectangle"]')

//by tag name and attribute with value
cy.get('input[placeholder="Email"]')

//by two different attributes
cy.get('[placeholder="Email"][type="email"]')

// by tag name, attribute with value, ID and class name
cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

// The most recommended way by cypress
cy.get('[data-cy="imputEmail1"]')

})

it.only('second test', () =>

{
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains('Form Layouts').click()
    
})

it('third test', () =>

{

 // lalala   
})

})

describe('Our second suite', () => {

    it('first test', () =>
    
    {
    
    
    })
    
    it('second test', () =>
    
    {
    
        
    })
    
    it('third test', () =>
    
    {
    
        
    })
    
    })