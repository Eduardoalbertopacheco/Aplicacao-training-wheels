


it('deve exibir uma mensagem de alerta', function () {
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()

    cy.on('window:alert', function (result) {
        expect(result).to.equal('Isto é uma mensagem de alerta')

    })

})

it('Deve confirmar a solicitação', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => true)

    cy.get('#result').should('have.text', 'Mensagem confirmada')

})

it('Deve cancelar a solicitação', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => false)

    cy.get('#result').should('have.text', 'Mensagem não confirmada')

})

it('Deve exibir mensagem de boas vinda com o meu nome', function(){
    cy.visit('/javascript_alerts')

    cy.window().then(function($win) {
        cy.stub($win, 'prompt').returns('Eduardo Pacheco')
        cy.contains('button', 'Prompt').click()
    })

    cy.get('#result').should('have.text', 'Olá, Eduardo Pacheco')

})