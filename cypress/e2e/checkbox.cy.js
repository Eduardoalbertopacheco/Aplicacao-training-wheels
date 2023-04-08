

it('deve marcar os top 5 filmes da marvel', function(){

 cy.visit('/checkboxes')   


const movies = [
    'avengers',
    'cap2',
    'guardians',
    'blackpanther',
    'thor3'
]

movies.forEach(function(m){
    cy.get(`input[name=${m}]`)
    .click()
    .should('be.checked')



})

})



/*cy.get('input[name=avengers]')
   .click()
   .should('be.checked')

cy.get('input[name=cap2]')
   .click()
   .should('be.checked')

   cy.get('input[name=guardians]')
   .click()
   .should('be.checked')

   cy.get('input[name=antman]')
   .click()
   .should('be.checked')



})*/