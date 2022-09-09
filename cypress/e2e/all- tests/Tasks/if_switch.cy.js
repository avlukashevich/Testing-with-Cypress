import Сhance from 'chance'
context('Testing if, else and ?', () => {
    let age = chance.age();

    it('TESTS', () => {
        {
            //define a person using if operator
            cy.log('The generated age is' + " " + age);
            if (age >= 0 && age < 13) {
                cy.log("It's a child");
            } else if (age >= 13 && age < 20) {
                cy.log("It's a teen");
            } else if (age >= 20 && age < 60) {
                cy.log("It's an adult");
            } else {
                cy.log("It's a senior");
            }
        }

        //define a person using switch
        switch (true) {
            case age >= 0 && age < 13:
                cy.log("It's a child");
                break;
            case age >= 13 && age < 20:
                cy.log("It's a teen");
                break;
            case age >= 20 && age < 60:
                cy.log("It's an adult");
                break;
            case age >= 60 && age < 120:
                cy.log("It's a senior");
                break;
        }

        //define a person using ?
        let isChild = (age >= 0 && age < 13) ? 'isChild' : 'notChild';
        let isTeen = (age >= 13 && age < 20) ? 'isTeen' : 'notTeen';
        let isAdult = (age >= 20 && age < 60) ? 'isAdult' : 'notAdult';
        let isSeniour = (age >= 60 && age < 120) ? 'isSenior' : 'notSenior';

        cy.log(isChild + ' ' + isAdult + ' ' + isSeniour + ' ' + isTeen);

    })
})
