describe('Tests in my home page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('type in my input and add in my list', () => {
        cy.get('#input-name').type('Gabriel Rudan');
        cy.get('button').click();

        cy.get('li').first().should('contain', 'Gabriel Rudan')
    });

    it('insert three names in my list', () => {
        cy.get('#input-name').type('Gabriel Rudan');
        cy.get('button').click();

        cy.get('#input-name').type('Letícia Torres');
        cy.get('button').click();

        cy.get('#input-name').type('Raylander Marques');
        cy.get('button').click();

        cy.get('li').first().should('contain', 'Gabriel Rudan')
        cy.get('li').last().should('contain', 'Raylander Marques')
    });

    it('try to insert null name', () => {
        cy.get('button').click();
        cy.get('#empty-list').first().should('contain', 'Lista de Nomes Vazia...')
        
    });

    it('try to insert the same name', () => {
        cy.get('#input-name').type('Alysson Araujo');
        cy.get('button').click();

        cy.get('#input-name').type('Alysson Araujo');
        cy.get('button').click();

        cy.get('#same-error').first().should('contain', 'Esse nome já está na lista')
    });

});