describe('Create Missing Item', () => {
    it('passes', () => {
        // Orchestration
        cy.visit('http://localhost:3000/lost-n-found')
        cy.get('form').within(($form) => {
            cy.get('input[name="item"]').type('Item 1')
            cy.get('input[name="color"]').type('Black')
            cy.get('input[name="description"]').type('A missing black Item')
            cy.root().submit()
        })
        cy.reload()

        // Assertions
        cy.get('#lost-item-card-name').should('have.text', 'Item 1')
        cy.get('#lost-item-card-color').should('have.text', 'Black')
        cy.get('#lost-item-card-description').should('have.text', 'A missing black Item')
    })
})