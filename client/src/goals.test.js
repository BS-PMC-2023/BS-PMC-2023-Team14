const puppeteer = require('puppeteer');
//const { test, expect } = require('jest');

const calculateBMI = puppeteer('./GoalsDisplay').calculateBMI;
const calculateDailyNeeds = puppeteer('./setgoals').calculateDailyNeeds;

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


test('calculates daily needs correctly for a male with sedentary activity level', () => {
  // Define the test case inputs
    const weight = 98;
    const height = 198;
    const age = 22;
    const sex = 'male';
    const activityLevel = 'sedentary';

  // Calculate the expected results
    const expectedCalories = 2671.8912000000005 ;  // This is calculated based on the formula in your function
    const expectedProtein = weight;    // This is 1 gram per kilogram of body weight

  // Call the function and get the actual results
    const results = calculateDailyNeeds(weight, height, age, sex, activityLevel);

  // Assert that the actual results match the expected results
    expect(results.calories).toBeCloseTo(expectedCalories, 1);
    expect(results.protein).toBe(expectedProtein);
});
