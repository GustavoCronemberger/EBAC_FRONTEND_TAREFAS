/// <reference types="cypress" />

// O CY não consegue mostrar enviando a candidatura ao final, mas emite um alerta dizendo que foi cumprido.

// Screenshot ele irá tirar um print do que você quer.

describe('Teste para a home', () => {
    beforeEach(() =>{
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"').type('gustavo cronemberger')
        cy.get('input[name="email"').type('gustavo@teste.com')
        cy.get('input[name="telefone"').type('99 999999999')
        cy.get('input[name="endereco"').type('rua jeste, bairro cypress, code-vs')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })

})
