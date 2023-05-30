// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe("Home page", () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3001/api/v1/reservations", {
      fixture: '/reservations.json'
    })
    cy.visit("http://localhost:3000")
  })
  it("should have a header with title of website", () => {
    cy.get("h1")
      .contains('Turing Cafe Reservations')
      
  })

  it("should display a form to submit details for a new reservation", () => {
    cy.get("form")
      .find(('input[name="name"]'))
      .and('have.value', '')
      .find(('input[name="date"]'))
      .and('have.value', '')
      .find(('input[name="time"]'))
      .and('have.value', '')
      .find(('input[name="numberGuests"]'))
      .and('have.value', '')
      
  })
})