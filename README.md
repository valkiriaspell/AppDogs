# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos logrados

- Construir una App utilizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing con Jest, Enzyme y Thunder Client.

## Tiempos

El proyecto se desarrolló en un lapso de 15 días. 

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas está el código del back-end y el front-end respectivamente.

El contenido de `client` fue creado usando: Create React App.

## Enunciado

El proyecto de se trata de una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros


__IMPORTANTE__: Para las funcionalidades de filtrado y ordenamiento NO se utilizaron los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que fueron realizados con logica de javascript.

#### Tecnologías aplicadas:
- [ ] ES6
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Testing:

- { } Jest - Enzyme 
- { } Mocha - Chai - Supertest
- { } Thunder Client

#### Rutas y componentes:

 "/" component= {LandingPage}
'/home' components= {Nav} && {Dogs}
'/createDog' component= {createDog}
'/home/:id' component= {DogById}
'/about' component= {About}                

#### Backend

Se desarrolló un servidor en Node/Express con las siguientes rutas que obtiene los datos desde una API externa y desde una base de datos local creada con PostgreSQL.
Se manipuló la base de datos desde Javascript, mediante Sequelize.


