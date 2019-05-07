import Page from './Page'

export default class GoogleSearch extends Page {
  constructor (term = 'todo mvc', location = 'https://www.google.com/search') {
    super(`${location}?q=${encodeURIComponent(term)}`)
    cy.location('host').should('equal', 'www.google.com')
    cy.location('pathname').should('equal', '/search')
    cy.location('search').should('contain', `q=${encodeURIComponent(term)}`)
  }

  assertSitePresentInResults (site) {
    cy.get(`#ires link[href^="${site}"]`).should('exist')
    return this
  }
}
