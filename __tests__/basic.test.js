const checkModules = require('../src');

describe('Basic test', () => {
  test('check truthy', () => {
    var hasGulp = checkModules(['gulp']);
    expect(hasGulp).toBe(true);
  });

  test('check with warning', () => {
    var hasModules = checkModules(['gulp', 'react', 'react-dom', '@feizheng/react-ant-tree']);
    expect(hasModules).toBe(false);
  });
});
