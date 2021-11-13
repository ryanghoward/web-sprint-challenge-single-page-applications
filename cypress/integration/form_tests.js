describe("Lambda Eats", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/pizza`);
  });

  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("select[name=size]");
  const pepperoniCheck = () => cy.get("input[name=pepperoni]");
  const cheeseCheck = () => cy.get("input[name=cheese]");
  const sausageCheck = () => cy.get("input[name=sausage]");
  const baconCheck = () => cy.get("input[name=bacon]");
  const pineappleCheck = () => cy.get("input[name=pineapple]");
  const onionCheck = () => cy.get("input[name=onion]");
  const olivesCheck = () => cy.get("input[name=olives]");
  const submitBtn = () => cy.get("button[id=order-button]");

  it("The proper elements are showing", () => {
    nameInput().should("exist");
    sizeInput().should("exist");
    pepperoniCheck().should("exist");
    cheeseCheck().should("exist");
    sausageCheck().should("exist");
    baconCheck().should("exist");
    pineappleCheck().should("exist");
    onionCheck().should("exist");
    olivesCheck().should("exist");
    submitBtn().should("exist");
  });

  it("Can type in input", () => {
    nameInput()
      .should("have.value", "")
      .type("Ryan")
      .should("have.value", "Ryan");
  });

  it("Can check multiple toppings", () => {
    pepperoniCheck().check();
    sausageCheck().check();
    baconCheck().check();
    pineappleCheck().check();
    onionCheck().check();
    olivesCheck().check();
  });

  it("Can submit order form", () => {
    nameInput()
      .should("have.value", "")
      .type("Ryan")
      .should("have.value", "Ryan");
    submitBtn().click();
  });
});
