const { test, expect } = require('jest');

const calculateBMI = require('./GoalsDisplay').calculateBMI;

test('calculateBMI calculates the BMI correctly', () => {
  // Define the test case inputs
  const weight = 70;
  const height = 170;

  // Calculate the expected result
  const expectedBMI = '24.22';

  // Call the function and get the actual result
  const actualBMI = calculateBMI(weight, height);

  // Assert that the actual result matches the expected result
  expect(actualBMI).toBe(expectedBMI);
});
