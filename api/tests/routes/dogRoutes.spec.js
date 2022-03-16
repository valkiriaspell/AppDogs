/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dogs, conn } = require('../../src/db.js');
const { v4: v4 } = require('uuid');


const agent = session(app);
const dog = {
  name: 'Pug',
  id: v4(),
};


describe('Dogs routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Dogs.sync({ force: true })
    .then(() => Dogs.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs')
        .expect(200)
    )
  })
})

describe('dogs properties', () => {
  it('should get an object witch the properties "name" and "id" ', () =>
    agent.get('/dogs?name=bedlington')
      .expect(200)
      .expect(function(res) {
        res.body.includes("name", "id");
      })  
      )
    })

describe('dog by name', () => {
   it('should get the dog asked by query', () =>
        agent.get('/dogs?name=bedlington')
          .expect(200)
          .expect(function(res) {
            res.body.includes([
                  {
                    "id": 34,
                    "name": "Bedlington Terrier",
                    "weight": "8 - 10",
                    "height": "38 - 41",
                    "source": "API",
                    "temperament": "Affectionate, Spirited, Intelligent, Good-tempered",
                    "life_span": "14 - 16 years",
                    "image": "https://cdn2.thedogapi.com/images/ByK8gx947.jpg"
                  }
                ]);
              })) 
    })

    describe('dog by name', () => {
      it('should get an empty array if the name does not match anything', () =>
           agent.get('/dogs?name=gato')
             .expect(200)
             .expect(function(res) {
               res.body === [];
                 })) 
       })
    
    describe('dogs are a lot', () => {
      it('A full request of dogs should bring at least 170 dogs', () =>
           agent.get('/dogs')
             .expect(200)
             .expect(function(res) {
               res.body['content-length', 170]               
                 })) 
       }) 
  
       describe('dog created', () => {
        it('should return the dog created, matching the name "Example" ', () =>
          agent.post('/dog')
            .send({
              "name": "Example Dog",
              "weight": "3 - 6",
              "height": "23 - 29",
              "life_span": "10 - 12 years",
              "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
              "temperament": ["Playful", "Friendly"]
            })
            .expect(function(res) {
              res.body.name.includes("Example");
            })  
            )
          })  