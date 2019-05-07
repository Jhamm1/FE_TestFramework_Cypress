export default class Component {
  constructor (selector) {
    this.selector = selector
  }

  get root () {
    return cy.get(this.selector)
  }
}
