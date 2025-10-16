describe('Testing Application', () => {
    it('Check content in the page', () => {
        cy.visit('http://127.0.0.1:3004')
        cy.get('#title').should(($p) => {
            expect($p.first()).to.contain('Hello world')
        }).log()
    })
})