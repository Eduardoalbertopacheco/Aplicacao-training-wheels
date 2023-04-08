


it('selecionar a data de nascimento', function(){

    cy.visit('/datepicker')

    const date = {
        month: 'abr',
        year: '1987',
        day: /^19$/g  //<<< expressão regular, ^ = começa com.. e $ = termina com..
        //para começar com 1 e terminar com 9 = 19
    }

    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button[class=date-item]', date.day).click()

})