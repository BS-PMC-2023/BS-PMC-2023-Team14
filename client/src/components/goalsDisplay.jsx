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



  useEffect(async () => {
    const userEmail = localStorage.getItem('email');
    setUserEmail(userEmail);
    console.log(userEmail);
    await fetchGoals()
  }, []);


  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  async function fetchGoals() {
    try {
      const params = new URLSearchParams([['email', userEmail]]);
      const email = "userEmail"; // Replace with the actual user's email
      const response = await axios.get('http://localhost:4000/api/users/getgoals',{params});
      setGoals(response.data.goals);
      console.log(response.data.goals);
      console.log(goals?.exerciseDays);
    } catch (error) {
      console.log("fetchGoals: ", error);
    }
  }




  const currentWeightRef = React.useRef(null);
  const goalWeightRef = React.useRef(null);

  return (
    <div className="goals-display-container">
  <h2>My Goals</h2>
  <div className="goals-display">
    <div className="goal">
      <div className="goal-label">Current Weight:</div>
      <div className="goal-value" ref={currentWeightRef}>
        {goals.length > 0 ? goals[0].currentWeight : ''} Kg
      </div>
    </div>
    <div className="goal">
      <div className="goal-label">Goal Weight:</div>
      <div className="goal-value" ref={goalWeightRef}>
        {goals.length > 0 ? goals[0].goalWeight : ''} Kg
      </div>
    </div>
    <div className="goal">
      <div className="goal-label">Muscle Gain:</div>
      <div className="goal-value">
        {goals.length > 0 ? goals[0].muscleGain : ''} Kg
      </div>
    </div>
    <div className="goal">
      <div className="goal-label">Training Days in a Week:</div>
      <div className="goal-value">
        {goals.length > 0 ? goals[0].exerciseDays : ''}
      </div>
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