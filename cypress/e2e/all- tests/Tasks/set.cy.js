import Chance from 'chance'
import { isSuperSet, union, intersection, difference } from "../../../utils/helper"
context('Testing set', () => {
    it('TESTS', () => {
        //Задание 1
        let currencySetOne = new Set(['EUR', 'USD', 'JPY', 'CAD', 'AUD', 'CHF', 'GBP']); //Определение набора значений при поздании множества
        let currencySetTwo = new Set(); //Создание пустого множества

        //создание множества из массива
        let arr = [1, 2, 3, 4, 4, 4, 5];
        let numbers = new Set(arr);

        //Задание 2
        cy.log('Вывод значений с помощью for...of');
        for (let item of currencySetOne) cy.log(item);

        cy.log('Вывод значений с помощью forEch');
        currencySetOne.forEach(function (item) {
            cy.log(item)
        })

        cy.log('Вывод значений с помощью for...of keys');
        for (let item of currencySetOne.keys()) cy.log(item);

        cy.log('Вывод значений с помощью for...of values');
        for (let item of currencySetOne.values()) cy.log(item);

        cy.log('Вывод значений с помощью for...of entries');
        for (let [key, value] of currencySetOne.entries()) cy.log(key);

        //Задание 3
        currencySetTwo.add('BYN').add('JPY').add('CHF');
        cy.log('Добавление новых уникальных значений в пустое множество и вывод значений');
        for (let item of currencySetTwo) cy.log(item)
        currencySetTwo.add('BYN');
        cy.log('Добавление существущего значения BYN и вывод значений');
        for (let item of currencySetTwo) cy.log(item)

        //Задание 4
        cy.log('===Проверка на наличие BYN значения в множестве===');
        cy.log("Set has BYN value:" + currencySetTwo.has('BYN'));
        currencySetTwo.delete('BYN'); //Удаление значения из множества
        cy.log('=== Проверка на наличие удаленного BYN значения в множестве===');
        cy.log("Set has BYN value:" + currencySetTwo.has('BYN'));

        //Задание 5
        let arrayCurrency = Array.from(currencySetOne); //Создание массива из множества
        cy.log('===вывод 1 случайного значения из массива===');
        cy.log(chance.pickone(arrayCurrency));
        cy.log('===Вывод нескольких случайных значений из массива===');
        cy.log(chance.pickset(arrayCurrency, chance.integer({ min: 1, max: 7 })));
    })

    //Задание 6
    it('TESTS', () => {
        let setA = new Set([1, 2, 3, 4]),
            setB = new Set([2, 3]),
            setC = new Set([3, 4, 5, 6]);
        cy.log(isSuperSet(setA, setB));
        cy.log(JSON.stringify(union(setA, setC)));
        cy.log(JSON.stringify(intersection(setA, setC)));
        cy.log(JSON.stringify(difference(setA, setC)));
    })
})