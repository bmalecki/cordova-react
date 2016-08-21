import {assert} from 'chai';

import {Footer} from '../components/Footer'


describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 wtthen the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


describe('Footer', () => {
  it('should be a function', () => {
    assert.isFunction(Footer);
  })
})
