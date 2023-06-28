Hello Simscale Team, I hope you all are doing good!

Here I have done with coding challenge for the simulation, There are some flakyness which needs to be improved for example accpeting cookies and redirecting from /dashboard to /dashboard/v2. 

TechStack:
   * Cypress
   * Typescript programming language

Project Architecture:

    * e2e Folder -> This folder contains all test fileS
    * fixtures -> This folder contails all test data and files which require for the tests
    * Pages -> This folder is for store all the element locators
    * TsConfig file -> To support typescript 
    * Cypress.config.js -> All cypress configuration goes under this config file
    * Packet.json -> Dependency management

To Execute the coding:

    * Please set the username and password under fixtures -> credentials.json file
    * Install npm dependencies using `npm i` or `npm install`
    * To run the test headless mode use `npm test` command
    * To see the test visually with cypress test run use `npm run open` 
        -> Configure E2E testing
        -> Select the browser and click start E2E test
        -> Wait for the browser to launch and click simulation.cy.ts

***********************  THANK YOU  ***********************
