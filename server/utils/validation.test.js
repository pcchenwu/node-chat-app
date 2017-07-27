var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
      var str = 5566;
      var res = isRealString(str);
      expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
      var str = '   ';
      var res = isRealString(str);
      expect(isRealString(str)).toBe(false);
    });

    it('should allow string with non-space characters', () => {
      var str = '  5566  ';
      var res = isRealString(str);
      expect(res).toBe(true);
    });
});