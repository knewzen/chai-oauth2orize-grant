var plugin = require('..')
  , Test = require('../lib/test');

describe('helper', function() {
  
  var chai = {};
  plugin(chai);
  
  it('should add grant helper to chai', function() {
    expect(chai.grant).to.be.a('function');
  });
  
  describe('when invoked', function() {
    var test = chai.grant({});
    
    it('should return test wrapper', function() {
      expect(test).to.be.an.instanceOf(Test);
    });
  });
  
});
