import testUtil from './TestUtil';

describe('testUtil', () => {
  describe('#testProps', () => {
    it('should return testID and aria-label according to input id', () => {
      const id = 'Dashboard_AddLocation_Button';
      const expectedResult = {
        id,
        'aria-label': id
      };

      const result = testUtil.testProps(id);

      expect(result).toEqual(expectedResult);
    });
  });
});
