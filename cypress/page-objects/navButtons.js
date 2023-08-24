class NavButtons {

    getSettingsNavButton() {
        return cy.get('a[href="#/settings"]').should('exist')
    }

    getMyProfile() {
        return cy.contains('a.nav-link.ng-binding', 'Cypress tests')
    }

    getHomeNavBtn() {
        return cy.get('a[href="#/"]').should('exist')
    }

    getLogoutButton() {
        return cy.get('.btn-outline-danger').should('exist')
    }

    getSigninNavBtn () {
        return cy.get('a[href="#/login"]').should('exist')
    }
}

export default NavButtons;