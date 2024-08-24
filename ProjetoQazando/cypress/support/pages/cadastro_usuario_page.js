/// <reference types="cypress" />


export default {
    clicarCadastrar(){
        cy.get('#btnRegister')
            .click()
    },

    validarMensagemErro(mensagem){
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    preencherNome(nome){
        cy.get('#user')
            .type(nome)
    },

    preencherEmail(email){
        cy.get('#email')
            .type(email)
    },

    preencherPassword(password){
        cy.get('#password')
            .type(password)
    },

    validarMensagemSucesso(nome){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
    }
}