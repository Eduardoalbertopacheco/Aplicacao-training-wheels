

it('deve selecionar uma única opção', function(){
    cy.visit('/apps/select2/index.html')


    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()
})


//OPÇÃO 01 PARA SELECIONAR MULTIPLAS OPÇÕES

 it('deve selecionar multiplas opções', function(){
            cy.visit('/apps/select2/index.html')
        

    const frameworks = [
        'Cypress',
        'Robot Framework',
        'Protractor'
    ]

    frameworks.forEach(function(framework){
        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option', framework).click()

    })


    //OPÇÂO 02 PARA SELECIONAR MULTIPLAS OPÇÕES

    /*cy.get('.select2-selection--multiple').click()
    cy.contains('.select2-results__option', 'Cypress').click()

    cy.get('.select2-selection--multiple').click()
    cy.contains('.select2-results__option', 'Robot Framework').click()

    cy.get('.select2-selection--multiple').click()
    cy.contains('.select2-results__option', 'Protractor').click()*/

})