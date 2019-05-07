import Page from './Page'
import GoogleSearch from './GoogleSearch'

export default class HomePage extends Page {
  constructor (location = '/') {
    super(location)
  }

  addToDoItem (title) {
    cy.get('.new-todo').type(`${title}{enter}`)
    return this
  }

  markToDoCompleted (index) {
    cy.get('.todo input[type="checkbox"]').eq(index).check()
    return this
  }

  removeToDoItem (index) {
    cy.get('.todo-list li .destroy').eq(index).click({ force: true })
    return this
  }

  listOnlyActiveToDoItems () {
    cy.get('ul.filters li a').eq(1).click()
    return this
  }

  listOnlyCompletedToDoItems () {
    cy.get('ul.filters li a').eq(2).click()
    return this
  }

  clearCompletedToDoItems () {
    cy.get('.clear-completed').click()
    return this
  }

  searchForTodoMVC () {
    return new GoogleSearch('todo mvc')
  }

  assertNumberOfToDoItems (number) {
    cy.get('.todo-list li').should('have.length', number)
    return this
  }

  assertToDoIsMarkedCompleted (index) {
    cy.get('.todo-list li').eq(index).should('have.class', 'completed')
    return this
  }

  assertToDoTitle (index, title) {
    cy.get('.todo-list li').eq(index).should('contain', title)
    return this
  }
}
