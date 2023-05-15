import React, { useState } from 'react';
import '../components/css/displaygoals.css';
import weightImage from './images/weight.jpg';
import Map from './map';
import SetGoals from './setgoals';

const GoalsDisplay = ({ currentWeight, goalWeight, dailyCalorieGoal, exerciseGoal }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const currentWeightRef = React.useRef(null);
  const goalWeightRef = React.useRef(null);

  return (
    <div className="goals-display-container">
      <h2>My Goals</h2>
      <div className="goals-display">
        <div className="goal">
          <div className="goal-label">Current Weight:</div>
          <div className="goal-value" ref={currentWeightRef}>{currentWeight} Kg</div>
        </div>
        <div className="goal">
          <div className="goal-label">Goal Weight:</div>
          <div className="goal-value" ref={goalWeightRef}>{goalWeight} Kg</div>
        </div>
        <div className="goal">
          <div className="goal-label">muscle gain:</div>
          <div className="goal-value">{dailyCalorieGoal} Kg</div>
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

      <button className='setgoalsbutton' onClick={openPopup}>Set Goals</button>

      {isPopupOpen && <SetGoals closePopup={closePopup} />}
      {isPopupOpen && <div className="popup-overlay" onClick={closePopup} />}
    </div>
  );
};

export default GoalsDisplay;
