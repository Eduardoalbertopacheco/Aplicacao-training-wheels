

it('deve exibir o nome da tecnologia ao passar o mouse', function () {
    cy.visit('/hovers')

    const techs = [
        { img: 'img[src*=python]', tag: '.tag-python', brand: 'Python' },
        { img: 'img[src*=golang]', tag: '.tag-golang', brand: 'Golang' },
        { img: 'img[src*=nodejs]', tag: '.tag-nodejs', brand: 'Node.js' },
        { img: 'img[src*=netcore]', tag: '.tag-netcore', brand: '.NETCore' }
    ]

    techs.forEach(function (tech) {
        cy.get(tech.img)
            .realHover('mouse')


        cy.get(tech.tag)
            .should('be.visible')  //aqui valida se o texto vai aparecer quando se passa mouse
            .should('have.text', tech.brand) // aqui valida o texto que vai aparecer

    })

})