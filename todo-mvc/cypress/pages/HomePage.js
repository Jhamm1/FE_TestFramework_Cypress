import Page from './Page'

export default class HomePage extends Page {
  constructor (location = '/') {
    super(location)
  }

  addToDoItem (title) {
    cy.get('.new-todo').type(`${title}{enter}`)
  }

  markToDoCompleted (index) {
    cy.get('.todo input[type="checkbox"]').eq(index).check()
  }

  removeToDoItem (index) {
    cy.get('.todo-list li .destroy').eq(index).click({ force: true })
  }

  listOnlyActiveToDoItems () {
    cy.get('ul.filters li a').eq(1).click()
  }

  listOnlyCompletedToDoItems () {
    cy.get('ul.filters li a').eq(2).click()
  }

  clearCompletedToDoItems () {
    cy.get('.clear-completed').click()
  }

  assertNumberOfToDoItems (number) {
    cy.get('.todo-list li').should('have.length', number)
  }

  assertToDoIsMarkedCompleted (index) {
    cy.get('.todo-list li').eq(index).should('have.class', 'completed')
  }

  assertToDoTitle (index, title) {
    cy.get('.todo-list li').eq(index).should('contain', title)
  }
}
