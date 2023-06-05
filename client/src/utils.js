// utils.js

export function calculateBMI(weight, height) {
    let height1 = height / 100;
    const bmi = weight / (height1 * height1);
    const roundedBMI = bmi.toFixed(2);
    return roundedBMI;
}

export const calculateExerciseDays = (weight, height) => {
    const bmi = weight / ((height / 100) ** 2);
    let recommendedDays;

    if (bmi < 18.5) { // Underweight
        recommendedDays = 3;
    } else if (bmi >= 18.5 && bmi < 22.9) { // Normal weight
        recommendedDays = 4;
    } else if (bmi >= 22.9 && bmi < 29.9) { // Overweight
        recommendedDays = 5;
    } else if (bmi >= 30) { // Obesity
        recommendedDays = 6;
    } else { // Default
        recommendedDays = 3;
    }
    return recommendedDays;
};
