describe('testes do carrinho da amazon', () => {
    beforeEach(()=> {        
        cy.visit('https://amazon.com.br')
        cy.get('#nav-cart').as('carrinho')
    })

    //Validações iniciais
    it('Abre o carrinho de compras', () => {
        cy.get('@carrinho').click()
        cy.title().should('eq','Carrinho de compras da Amazon.com')
    })

    it('Checa se carrinho está vazio', () => {
        cy.get('@carrinho').click()
        cy.contains('h2','Seu carrinho da Amazon está vazio')
    })

    it('Adiciona produto ao carrinho e exclui ao limpar cookies do navegador', () => {
        cy.buscaAdiciona('fidget spinner')
        cy.clearCookies()
        cy.reload()
        cy.get('h2').should('have.text','\nSeu carrinho da Amazon está vazio\n')
    })


    //Funcionalidades Básicas
    it('Adiciona um produto ao carrinho e valida adição abrindo o carrinho', () => {
        cy.buscaAdiciona('barbeador')
        cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').should('have.text','\n\n\n\n\nAdicionado ao carrinho\n\n')
        cy.get('@carrinho').click()
        cy.get('#sc-subtotal-label-activecart').should('have.text','\n\n\n\n\n\n\n\n\nSubtotal (1 item):')
    });

    it('Adiciona um produto e valida incremento do carrinho no contador', () => {
        cy.buscaAdiciona('esmalte')
        cy.get('#nav-cart-count').should('have.text', '1') 
    });


    it('Adiciona e exclui um produto e verifica se carrinho está vazio', () => {
        cy.buscaAdiciona('barbeador')
        cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').should('have.text','\n\n\n\n\nAdicionado ao carrinho\n\n')
        cy.get('@carrinho').click()
        cy.get('input[data-action="delete"]').click()
        cy.get('h1').should('have.text','\nSeu carrinho de compras da Amazon está vazio.\n')
    });

    //Funcionalidades específicas do carrinho
    it('Adiciona produto e salva para mais tarde', () => {
        cy.buscaAdiciona('lego')
        cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').should('have.text','\n\n\n\n\nAdicionado ao carrinho\n\n')
        cy.get('@carrinho').click()
        cy.get('input[data-action="save-for-later"]').click()
        cy.get('#sc-saved-cart-list-caption-text').should('have.text','\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n    \n        Salvo para mais tarde (1 item)\n    \n\n\n') 
    })

    //Adicionando e validando no menu lateral do carrinho
    it('Adiciona produto e valida no carrinho do menu lateral', () => {
        cy.buscaAdiciona('carro de controle remoto')
        cy.get('#ewc-content').should('be.visible')
    })

    //Adicionar produto com garantia estendida insere dois itens no carrinho
    it('Adiciona produto com seguro de protecao', () => {
        cy.buscaAdiciona('iPhone')
        cy.get('#attachSiAddCoverage').click()
        cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').should('have.text','\n\n\n\n\nAdicionado ao carrinho\n\n')
    })    
})