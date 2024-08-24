/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    beforeEach('Acessar a tela de cadastro', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })


    it('Campo e-mail vazio', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail invalido', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha invalido', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherPassword('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastra com sucesso', () => {

        const nome = faker.person.fullName()

        cadastro_page.preencherNome(nome)
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherPassword('123456')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(nome)
    })

})