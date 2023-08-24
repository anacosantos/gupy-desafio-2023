export function getErrorField () {
    return cy.get('.error-messages')
}

export function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    const randomTitle = `cypress ${randomNumber}`;
    return randomTitle;
}