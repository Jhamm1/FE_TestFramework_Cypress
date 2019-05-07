export default class Page {
 constructor (location) {
   if (location) {
     cy.visit(location)
   }
 }
}
