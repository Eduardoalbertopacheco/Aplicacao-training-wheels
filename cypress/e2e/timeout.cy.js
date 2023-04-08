


it('exemplo de timeou', function(){
    cy.visit('/timeout')

    cy.contains('button', 'Habilita').click()

    /*cy.wait(7000) //<< Exemplo 1 de time out para o cypress aguardar, sempre vai aguardar
    7seg*/

    cy.get('#firstname')
        .should('be.visible')
        .type('Eduardo', {timeout: 7000})  /*<< Exeplo 2 de time out para o cypress aguardar,
        aqui ele aguardar até 7seg, mas se habilitar antes ele preenche antes*/


    })
