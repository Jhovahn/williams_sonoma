const assert = require('chai').assert;
const app = require('../server');

describe('Application', function() {
  describe('server', function() {
    it('server should return an object', function() {
      assert.typeOf(app, 'object');
    });
  });
});
