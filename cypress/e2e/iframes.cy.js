
const niceIframe = function () {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

const badIframe = function() {
    return cy
        .get('iframe[src*=instagram')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)

}

it('deve validar o total de segudores', function (){
    cy.visit('/bad_iframe')

    badIframe()
    .contains('.FollowerCountText', '7.233 seguidores')
    .should('be.visible')

})