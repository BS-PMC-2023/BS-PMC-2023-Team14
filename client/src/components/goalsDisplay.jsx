import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/css/displaygoals.css';
import weightImage from './images/weight.jpg';
import Map from './map';
import SetGoals from './setgoals';

const GoalsDisplay = ({ currentWeight, goalWeight, dailyCalorieGoal, exerciseGoal }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [goals, setGoals] = useState([]);
  const [userEmail, setUserEmail] = useState('');



  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    setUserEmail(userEmail);
  }, []);

  useEffect(() => {
    if (userEmail) {
      fetchGoals();
    }
  }, [userEmail]);

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  async function fetchGoals() {
    try {
      console.log(userEmail)
      const params = new URLSearchParams([['email', userEmail]]);
      const response = await axios.get('http://localhost:4000/api/user/getgoals', { params });
      //console.log(response.data.goals);
      //savegoals(response.data.goals);
      setGoals(response.data.goals);
      //console.log(goals);
      //console.log(goals[1]);
      //console.log(goals[1]?.exerciseDays);
    } catch (error) {
      console.log("fetchGoals: ", error);
    }
  };



  return (
    <div className="goals-display-container">
      <h2>My Goals</h2>
      <div className="goals-display">
        <div className="goal">
          <div className="goal-label">Current Weight:</div>
          <div className="goal-value">{goals.currentWeight} Kg</div>
        </div>
        <div className="goal">
          <div className="goal-label">Goal Weight:</div>
          <div className="goal-value">{goals.goalWeight} Kg</div>
        </div>
        <div className="goal">
          <div className="goal-label">Muscle Gain:</div>
          <div className="goal-value">{goals.muscleGain} Kg</div>
        </div>
        <div className="goal">
          <div className="goal-label">Training Days in a Week:</div>
          <div className="goal-value">{goals.exerciseDays}</div>
        </div>
      </div>

      <div className="motivation-container">
        <img src={weightImage} alt="Weight Loss" className="motivation-image" />
        <Map />
      </div>

      <button className="setgoalsbutton" onClick={openPopup}>
        Set Goals
      </button>

      {isPopupOpen && <SetGoals closePopup={closePopup} />}
      {isPopupOpen && <div className="popup-overlay" onClick={closePopup} />}
    </div>


  );
};

export default GoalsDisplay;