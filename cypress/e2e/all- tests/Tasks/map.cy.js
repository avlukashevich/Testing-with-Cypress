context('Testing map', () => {
    it('TESTS', () => {
        //Задание 1
        //Создать Map и добавить туда значения с помощью set
        let planetsMap = new Map();
        planetsMap.set("Mercury", { radius: 2440, density: 5.43, distance: 0.395 })
            .set("Venus", { radius: 6052, density: 5.24, distance: 0.723 })
            .set("Earth", { radius: 6378, density: 5.52, distance: 1 })
            .set("Mars", { radius: 3396, density: 3.93, distance: 1.53 });

        //Задание 2
        //Создание функции для вывода значений из Map
        function printMaps(array) {
            array.forEach((value, key) => {
                cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
            })
        };
        cy.log('===Вывод значений из map===');
        printMaps(planetsMap);

        //Задание 3
        //Реализация вывода данных из PlanetsMap о планете Earth
        cy.log("===Вывод данных о планене Земля===");
        cy.log(JSON.stringify(planetsMap.get("Earth")));

        //Задание 4
        cy.log('===Вывод общего количество элементов в коллекции===');
        cy.log(planetsMap.size);
        //Задание 5
        cy.log('===Создание множества; проверка, есть ли в map ключи из set===');
        let somePlanetsSet = new Set(["Mercury", "Not Mercury", "Mars"]);
        for (let planet of somePlanetsSet) {
            cy.log("Map has the value:" + planetsMap.has(planet));
        };
        //Задание 6
        //Удаление из planetsMap объекта с ключом Mars
        planetsMap.delete('Mars');
        cy.log('===Вывод значений после удаления Mars===');
        printMaps(planetsMap);

        //Задание 7
        //Создание нового Map и слияние двух Map
        let newPlanetsMap = new Map();
        newPlanetsMap.set("Uranus", { radius: 2443, density: 8.43, distance: 0.395 })
            .set("newPlanet", { radius: 6099, density: 2.22, distance: 0.723 })
            .set("someNewPlanet", { radius: 6338, density: 5.33, distance: 1 });

        let mergedPlanetsMaps = new Map([...planetsMap, ...newPlanetsMap]);
        cy.log('===Вывод объединенных map===')
        printMaps(mergedPlanetsMaps);;

        //Задание 8
        cy.log('===Вывод данных из объекта===');
        let planetA = {
            planet: "Mercury",
            radius: 2440,
            density: 5.43,
            distance: 0.395
        };

        for (let value in planetA) {
            cy.log(value + ":" + planetA[value])
        };

    })
})