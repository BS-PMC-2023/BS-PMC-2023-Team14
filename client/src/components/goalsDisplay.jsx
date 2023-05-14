import React from 'react';
import '../components/css/displaygoals.css';
import weightImage from './images/weight.jpg';
import Map from './map'
const GoalsDisplay = ({ currentWeight, goalWeight, dailyCalorieGoal, exerciseGoal }) => {
  const progressBar = React.useRef(null);
  const currentWeightRef = React.useRef(null);
  const goalWeightRef = React.useRef(null);



  function updateProgressBar(current, goal) {
    const progress = (current / goal) * 100;
    progressBar.current.style.width = `${progress}%`;
  }

  return (
    <div className="goals-display-container">
      <h2>My Goals</h2>
      <div className="goals-display">
        <div className="goal">
          <div className="goal-label">Current Weight:</div>
          <div className="goal-value" ref={currentWeightRef}>{currentWeight} lbs</div>
        </div>
        <div className="goal">
          <div className="goal-label">Goal Weight:</div>
          <div className="goal-value" ref={goalWeightRef}>{goalWeight} lbs</div>
        </div>
        <div className="goal">
          <div className="goal-label">Daily Calorie Goal:</div>
          <div className="goal-value">{dailyCalorieGoal} calories</div>
        </div>
        <div className="goal">
          <div className="goal-label">training days in a week:</div>
          <div className="goal-value">{exerciseGoal}</div>
        </div>
      </div>
      <div className="motivation-container">
        <img src={weightImage} alt="Weight Loss" className="motivation-image" />
        <Map />
      </div>
    </div>
  );
};

export default GoalsDisplay;
