import { SigninPage, DashboardPage, WorkbenchPage } from '../pages'

describe('Simulation', () => {

    const signin = new SigninPage();
    const dashboard = new DashboardPage();
    const workbench = new WorkbenchPage();

    beforeEach(() => {
        cy.fixture('credentials').as('cred');
        cy.fixture('simulation_import.x_t').as('testFile');
    });

    it('Upload the simulation and Edit in CAD mode then export', function() {
        cy.visit('/signin');
        cy.contains('Accept All').click();    //not a good practice to accept the cookies, it needs to be improved
        cy.get(signin.txtEmail).type(this.cred.email);
        cy.get(signin.txtPassword).type(this.cred.password);
        cy.get(signin.btnLogin).click();
        cy.get(dashboard.btnNewProject).click();
        cy.get(dashboard.txtProjectTitle).type('Ashokkumar');
        cy.get(dashboard.txtProjectDescription).type('This is testing project');
        cy.get(dashboard.btnCreateProject).click();

        cy.intercept({
            method: 'GET', 
            url: '/api/v1/projects/**'
        }).as('pid');

        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = '';
            })
        })
        cy.get(dashboard.btnCreateProject).click();
        cy.wait('@pid').then((res) => {
            cy.visit(`/workbench/?pid=${res.response.body['projectIdExt']}`)
        })

        cy.get(workbench.btnImportFileFromComputer).selectFile('@testFile', {force: true})
        cy.get(workbench.btnImport).click();
        cy.get(workbench.btnEditInCADMode).find('button').contains('Edit in CAD mode').click();
        cy.get(workbench.scnRightPannel).find('.wb-boolean__dot').click();
        cy.get(workbench.icnCollapseList).click();
        cy.get(workbench.scnRightPannel).get('#B1_TE20').click();
        cy.get(workbench.btnDeleteFace).click();
        cy.get(workbench.drpHealingMethod).select('Cap');
        cy.contains('Apply').click();
        cy.wait(2000)
        cy.get('div.wb-operationsBar').contains('Export').click();
        cy.get('[id="geometry:2"]').should('contain.text', 'Copy of');
    })
})