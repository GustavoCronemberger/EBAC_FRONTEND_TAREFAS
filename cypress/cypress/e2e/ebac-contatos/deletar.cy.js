/// <reference types="cypress" />

describe('Deletar Contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve deletar o contato da agenda', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').contains('gustavo teste8').parents('.sc-beqWaB.eQdhbg.contato').within(() => {
            cy.get('.sc-gueYoa.jWEbWB').find('button.delete').click()
        })

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Contato deletado com sucesso!')
        })

        cy.screenshot('tela-deletar-preenchido')
    })
})
