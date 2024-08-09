import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the home page", () => {
    cy.visit("/");
});

Then("the header should be visible", () => {
    cy.get("h1").should("be.visible");
});

Then("I should be redirected to the Mountain Pictures search", () => {
    cy.get("h2").should("have.text", "mountain Pictures")
})