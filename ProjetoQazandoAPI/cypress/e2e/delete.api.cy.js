/// <reference types="cypress" />


describe('Deletar um dispositivo', () => {

    it('Deletar um dispositivo', () => {
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

        cy.get('@postDeviceResult').then((response) => {
            expect(response.status).equal(200)

            cy.request({
                method: 'DELETE',
                url: `https://api.restful-api.dev/objects/${response.body.id}`,
                failOnStatusCode: false
            }).as('deleteDeviceResult')

            cy.get('@deleteDeviceResult').then((response_del) => {
                expect(response_del.status).equal(200)
                
            })
        })

    })

    it.only('Deletar um dispositivo não existente', () => {

        const id_inexistente = 'matheus'

        cy.request({
                    method: 'DELETE',
                    url: `/objects/${id_inexistente}`,
                    failOnStatusCode: false
                }).as('deleteDeviceResult')
    
                cy.get('@deleteDeviceResult').then((response_del) => {
                    expect(response_del.status).equal(404)
                    expect(response_del.body.error)
                        .equal(`Object with id = ${id_inexistente} doesn't exist.`)
                })
    })
})