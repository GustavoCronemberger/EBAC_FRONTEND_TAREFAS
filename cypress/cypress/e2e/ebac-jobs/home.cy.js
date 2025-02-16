/// <reference types="cypress" />
//Serve para informar ao vs code e ts que estamos usando cypress, facilita o autocomplete, detectação de erros, etc.

// Colocando o seletor >, ele pegará o primeiro li "filho" constando na div, que é o que buscamos e não mais todos do código.

// O type é usado para inserir o fullstack no input, seguido de um pressionamento da tecla Enter para ativar.

// Para ter certeza que ele aplicou o filtro, foi modificado de 4 para 1, e deu certo.
describe('Teste para a home', () => {
    it('Deve renderizar 4 vagas', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('Deve filtrar por fullstack ', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})
