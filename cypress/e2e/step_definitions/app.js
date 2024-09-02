import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the home page", () => {
    cy.visit("/");
});

Then("the header should be visible", () => {
    cy.get("h1").should("be.visible");
});

Then("I should be redirected to the Mountain Pictures search", () => {
    cy.get("h2").should("have.text", "mountain Pictures")
});

Then("I click in the text input", () => {
    cy.get("input").click();
});

Then("I type birds into the search input and press search button", () => {
    cy.get("input").type("birds");
    cy.get(".search-button").click();
});

Then("I should see Birds Images in header", () => {
    cy.get(":nth-child(24) > img").should("be.visible");
});