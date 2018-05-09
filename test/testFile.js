const assert = require('chai').assert;
const app = require('../app');

describe('Application', function() {
  describe('Function', function() {
    it('getFurniture should be a function', function() {
      assert.typeOf(app, 'object');
    });
  });
});
