import Chance from 'chance';

context('Learning arrays', () => {
  it('TESTS', () => {
    const planetsArray = [
      {
        planet: 'Mercury', radius: 2440, density: 5.43, distance: 0.395,
      },
      {
        planet: 'Venus', radius: 6052, density: 5.24, distance: 0.723,
      },
      {
        planet: 'Earth', radius: 6378, density: 5.52, distance: 1,
      },
      {
        planet: 'Mars', radius: 3396, density: 3.93, distance: 1.53,
      },
      {
        planet: 'Jupiter', radius: 71492, density: 1.33, distance: 5.21,
      },
      {
        planet: 'Saturn', radius: 60268, density: 0.69, distance: 9.551,
      },
      {
        planet: 'Uranus', radius: 25559, density: 1.27, distance: 19.213,
      },
      {
        planet: 'Neptune', radius: 24764, density: 1.64, distance: 30.07,
      },
    ]

    // Задание 1
    // Создание функции для вывода данных
    function printPlanets(array) {
      cy.log(JSON.stringify(array))
    }
    cy.log('==Вывод данных для массива planets==')
    printPlanets(planetsArray)

    // Задание 2
    // Добавление свойства solarSystem для всех объектов массива с помощью map()
    const newPlanetsArray = planetsArray.map((planet) => Object.assign(planet, { solarSystem: null }))
    cy.log('===Вывод данных для массива planets с новым свойством solarSystem===')
    newPlanetsArray.forEach((planet) => {
      cy.log(JSON.stringify(planet))
    })
    // Задание 3
    // Добавление в массив нового объекта
    planetsArray.push({
      planet: 'SomeNewPlanet', radius: 24764, density: 1.64, distance: 30.07, solarSystem: false,
    })
    cy.log('===Добавление нового объекта someNewPlanet в массив и вывод данных==')
    printPlanets(planetsArray)

    // Задание 4
    // Просуммировать радиус всех планет
    const radiusSum = planetsArray.reduce((total, planet) => total + planet.radius, 0)
    cy.log('===Вывод суммы всех радиусов===')
    cy.log(radiusSum)

    // Задание 5
    // Вывод планет, рассстояние до которых больше 5
    function getPlanetsWithDistance(array, distance) {
      array.filter((planet) => {
        if (planet.distance >= distance) {
          cy.log(JSON.stringify(planet))
        }
      })
    }
    cy.log('===Вывод планет, расстояние до которых больше указаного===')
    getPlanetsWithDistance(planetsArray, 5)

    // Задание 6
    // Удалить из массива данные по планете с именем SomeNewPlanet
    const index = planetsArray.map((i) => i.planet).indexOf('SomeNewPlanet')
    planetsArray.splice(index, index)
    cy.log('====Удаление someNewPlanets и вывод данных===')
    printPlanets(planetsArray)

    // Задание 7
    // Сортировка планет по радиусу (по возрастанию)
    const radiuses = planetsArray.map((planet) => planet.radius)
    radiuses.sort((a, b) => a - b)
    cy.log('===Сортировка планет по радиусу===')
    printPlanets(radiuses)

    // Задание 8
    // Сортировка планет по имени
    const names = planetsArray.map((i) => i.planet)
    cy.log('===Сортиировка планет по имени===')
    printPlanets(names.sort())

    // Задание 9
    // Вывод в консоль длину массива
    cy.log('===Длина массива===')
    cy.log(planetsArray.length)
  })
})
