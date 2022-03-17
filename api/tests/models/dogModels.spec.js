const { Dogs, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dogs model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dogs.sync({ force: true }));
    describe('new dog', () => {
      it('should throw an error if data on body is empty', (done) => {
        Dogs.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its has at least a name', () => {
        Dogs.create({ name: 'Pug' });
      });
      
      it('should throw an error if datatype is not correct', function(done) {
        Dogs.create({
          name: 'Dogy',
          image: 55,          
        })
          .then(() => done(new Error('Image should be text datatype')))
          .catch(() => done());      
    });
    });
    
  });
});
