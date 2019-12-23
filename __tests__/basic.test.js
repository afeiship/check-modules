const checkModules = require('../src');

describe('Basic test', () => {
  test('check true/false', () => {
    var hasGulp = checkModules(['gulp']);
    expect(hasGulp).toBe(true);
  });

  test('check true/false', () => {
    var hasModules = checkModules(['gulp', 'react', 'react-dom']);
    expect(hasModules).toBe(false);
  });
});
