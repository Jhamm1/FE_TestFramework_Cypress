describe('Tests using only Cypress API', () => {
  it('will add a todo item', () => {
    cy.visit('/')
    cy.get('.todo-list li').should('have.length', 0)
    cy.get('.new-todo').type('Buy ham and cheese{enter}')
    cy.get('.todo-list li').should('have.length', 1)
  })

  it('will mark added todo item as completed', () => {
    cy.visit('/')
    cy.get('.new-todo').type('Buy ham and cheese{enter}')
    cy.get('.todo input[type="checkbox"]').check()
    cy.get('.todo-list li').should('have.class', 'completed')
  })

  it('will remove added todo item', () => {
    cy.visit('/')
    cy.get('.new-todo').type('Buy ham and cheese{enter}')
    cy.get('.todo-list li .destroy').click({ force: true })
    cy.get('.todo-list li').should('have.length', 0)
  })

  it('will list only active todos', () => {
    cy.visit('/')
    cy.get('.new-todo').type('Buy ham and cheese{enter}')
    cy.get('.new-todo').type('Buy bread{enter}')
    cy.get('.todo input[type="checkbox"]:first').check()
    cy.get('ul.filters li a').eq(1).click()
    cy.get('.todo-list li')
      .should('have.length', 1)
      .should('contain', 'bread')
  })

  it('will list only completed todos', () => {
    cy.visit('/')
    cy.get('.new-todo').type('Buy ham and cheese{enter}')
    cy.get('.new-todo').type('Buy bread{enter}')
    cy.get('.todo input[type="checkbox"]:first').check()
    cy.get('ul.filters li a').eq(2).click()
    cy.get('.todo-list li')
      .should('have.length', 1)
      .should('contain', 'ham and cheese')
  })

  it('will clear completed todos', () => {
    cy.visit('/')
    cy.get('.new-todo').type('Buy ham and cheese{enter}')
    cy.get('.new-todo').type('Buy bread{enter}')
    cy.get('.todo input[type="checkbox"]:first').check()
    cy.get('.clear-completed').click()
    cy.get('.todo-list li')
      .should('have.length', 1)
      .should('contain', 'bread')
    cy.get('.todo-list li').should('not.have.class', 'completed')
  })
})
