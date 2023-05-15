import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Goals = () => {
  const [userEmail, setUserEmail] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [muscleGain, setmuscleGain] = useState('');
  const [exerciseDays, setExerciseDays] = useState('');


  const handleCurrentWeightChange = (event) => {
    setCurrentWeight(event.target.value);
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

  
  useEffect(() => {
    // Retrieve user's email from local storage
    const userEmail = localStorage.getItem('email');
    setUserEmail(userEmail);
    //console.log(userEmail);
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(userEmail, currentWeight, goalWeight, muscleGain, exerciseDays);
    try {
      const response = await axios.post("http://localhost:4000/api/users/setgoals", {
        email: userEmail,
        currentWeight: currentWeight,
        goalWeight: goalWeight,
        muscleGain: muscleGain,
        exerciseDays: exerciseDays,
      });

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
        <label>
          Exercise days:
          <input
            type="number"
            value={exerciseDays}
            onChange={handleExerciseDaysChange}
          />
        </label>
        <br />
        <button style={{
          border: 'none',
          outline: 'none',
          backgroundColor: 'rgb(63, 235, 177)',
          borderRadius: '20px',
          width: '120px',
          height: '40px',
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer',
          marginRight: '20px',
        }} type="submit" onClick={handleRefresh}>Save</button>
      </form>
    </div>
  );
};

export default Goals;
