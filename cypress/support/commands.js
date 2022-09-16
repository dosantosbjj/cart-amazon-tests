Cypress.Commands.add('buscaAdiciona', (nome) => {
    cy.get('#twotabsearchtextbox').type(nome + '{enter}')
    cy.get('.s-image').first().click()
    cy.get('#add-to-cart-button').click()    
})