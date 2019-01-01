require('jest-dom/extend-expect');
require('react-testing-library/cleanup-after-each');

/**
 * this was necessary for utils files which has no tests
 * inside the __tests__ folder, 
 * to let jest not to throw an error.
 * This line means that test.skip('') line will be added
 * for each file which was identified as test file.
 */
test.skip('');

// const fake = require('casual');
// global['fake'] = fake;

