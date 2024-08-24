/// <reference types="cypress" />


describe('Alterar um dispositivo', () => {

    it('Alterar um dispositivo', () => {
    
    const body_cadastro = {
            "name": "Notebook 2024",
            "data":{
                "year": 2024,
                "price": 1849.99,
                "CPU model": "Intel Core i5",
                "Hard disk size": "1 TB",
                "owner": "QA Matheus"
            }  
    }

    const body_update = {
        "name": "Notebook 2024 - UPDATE",
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
            body: body_cadastro 
        }).as('postDeviceResult')

        cy.get('@postDeviceResult').then((response_post) => {
            expect(response_post.status).equal(200)
            expect(response_post.body.name).equal(body_cadastro.name)

            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putDeviceResult')

            cy.get('@putDeviceResult').then((response_del) => {
                expect(response_del.status).equal(200)
                expect(response_del.body.name).equal(body_update.name)
            })
        })

    })
})