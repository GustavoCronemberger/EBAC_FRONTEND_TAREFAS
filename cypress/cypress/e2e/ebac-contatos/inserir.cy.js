/// <reference types="cypress" />

describe('Inserir Contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato na agenda', () => {
        cy.get('.sc-gLDzan.ckeKmo').within(() => {
            cy.get('input[type="text"]').first().type('gustavo teste1')
            cy.get('input[type="email"]').type('gustavo@teste.com')
            cy.get('input[type="tel"]').type('99 999999999')
            cy.get('.adicionar').click()
        })

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado por inserir novo contato!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})
