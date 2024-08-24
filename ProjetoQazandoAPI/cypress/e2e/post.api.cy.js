/// <reference types="cypress" />


describe('Cadastro de dispositivos', () => {
    

    it('Cadastrar dispositivo', () => {

        const dataAtual = new Date().toISOString().slice(0, 16)

        const body = {
                "name": "Notebook 2024",
                "data":{
                    "year": 2024,
                    "price": 1849.99,
                    "CPU model": "Intel Core i5",
                    "Hard disk size": "1 TB",
                    "owner": "QA Matheus"
                }  
        }


        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')


        //validações

        cy.get('@postDeviceResult').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty
            expect(response.body.createdAt.slice(0, 16)).equal(dataAtual)
        })
    })
})