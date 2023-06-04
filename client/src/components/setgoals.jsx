import React, { useState, useEffect } from "react";
import axios from "axios";

const Goals = () => {
  const [userEmail, setUserEmail] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [currentLength, setCurrentLength] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [muscleGain, setmuscleGain] = useState("");
  const [exerciseDays, setExerciseDays] = useState("");

  const handleCurrentWeightChange = (event) => {
    setCurrentWeight(event.target.value);
  };

  const handleCurrentLengthChange = (event) => {
    setCurrentLength(event.target.value);
  };

  const handleGoalWeightChange = (event) => {
    setGoalWeight(event.target.value);
  };

  const handlemuscleGainChange = (event) => {
    setmuscleGain(event.target.value);
  };

  const handleExerciseDaysChange = (event) => {
    setExerciseDays(event.target.value);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const calculateExerciseDays = (weight, height) => {
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

  useEffect(() => {
    // Retrieve user's email from local storage
    const userEmail = localStorage.getItem("email");
    setUserEmail(userEmail);
    //console.log(userEmail);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const calculatedExerciseDays = calculateExerciseDays(currentWeight, currentLength);

  console.log(userEmail, currentWeight, goalWeight, muscleGain, calculatedExerciseDays);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/setgoals",
        {
          email: userEmail,
          currentWeight: currentWeight,
          currentLength: currentLength,
          goalWeight: goalWeight,
          muscleGain: muscleGain,
          exerciseDays: calculatedExerciseDays,
        }
      );

      console.log("Goals set successfully:", response.data.message);
    } catch (error) {
      console.log("Error setting goals:", error);
    }
  };

  return (
    <div>
      <h2>Set Your Goals</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Current Weight:
          <input
            type="number"
            value={currentWeight}
            onChange={handleCurrentWeightChange}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="double"
            value={currentLength}
            onChange={handleCurrentLengthChange}
          />
        </label>
        <br />
        <label>
          Goal Weight:
          <input
            type="number"
            value={goalWeight}
            onChange={handleGoalWeightChange}
          />
        </label>
        <br />
        <label>
          muscle gain:
          <input
            type="number"
            value={muscleGain}
            onChange={handlemuscleGainChange}
          />
        </label>
        <br />
        
        <br />
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "rgb(63, 235, 177)",
            borderRadius: "20px",
            width: "120px",
            height: "40px",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
            marginRight: "20px",
          }}
          type="submit"
          onClick={handleRefresh}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Goals;
