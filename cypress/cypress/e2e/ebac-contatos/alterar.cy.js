/// <reference types="cypress" />

describe('Alterar Contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve alterar o contato na agenda', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').contains('gustavo teste1').parents('.sc-beqWaB.eQdhbg.contato').within(() => {
            cy.get('.sc-gueYoa.jWEbWB').find('button.edit').click()
        })
        cy.get('input[type="text"]').clear().type('gustavo teste8')
        cy.get('input[type="email"]').clear().type('gustavo@teste1.com')
        cy.get('input[type="tel"]').clear().type('88 88888888')
        cy.get('button.alterar').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Contato alterado com sucesso!')
        })

        cy.screenshot('tela-alteracao-preenchido')
    })
})
