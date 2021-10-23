// GETProdutos.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Products api', () => {
    context('GET /produtos', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.quantidade).to.eq(47)
                    expect(response.body.produtos.length).to.be.eq(47);
                    expect(response.body.produtos[0]).to.have.all.keys(
                      'nome', 'preco', 'descricao', 'quantidade', '_id'
                    )
                });
        });
    });
});