it('testa a página da política de privacidade de forma independente', function(){
    cy.visit('./src/privacy.html') 
    cy.get('#white-background > :nth-child(5)')
      cy.contains('Talking About Testing').should('be.visible')  

    
})