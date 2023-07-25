describe("First Test", () => {
  it("should go to homepage", () => {
    cy.visit("http://localhost:3001")
      .title()
      .should("eq", "Login | Nuber Eats");
  });
});
