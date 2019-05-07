import Page from './Page'
import Filters from '../components/Filters'

export default class HomePage extends Page {
  constructor (location = '/') {
    super(location)
  }

  get filters () {
    return new Filters()
  }

  addToDoItem (title) {
    cy.get('.new-todo').type(`${title}{enter}`)
  }

  markToDoCompleted (index) {
    cy.get('.todo input[type="checkbox"]').eq(index).check()
  }

  assertNumberOfToDoItems (number) {
    cy.get('.todo-list li').should('have.length', number)
  }

  assertToDoTitle (index, title) {
    cy.get('.todo-list li').eq(index).should('contain', title)
  }
}
