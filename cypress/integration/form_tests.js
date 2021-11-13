describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Sanity check to make sure tests are working", () => {
    expect(2 + 2).to.equal(4);
    expect(50 + 50).to.equal(100);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });
});
