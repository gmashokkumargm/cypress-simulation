// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { SigninPage } from "../pages";

Cypress.Commands.add("login", (email, password) => {
  const signin = new SigninPage();
  cy.session(username, () => {
    cy.visit("/login");
    cy.get(signin.txtEmail).type(email);
    cy.get(signin.txtPassword).type(password);
    cy.get(signin.btnLogin).contains("Log In").click();
  });
});
