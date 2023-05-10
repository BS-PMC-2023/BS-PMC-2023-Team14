import { useState } from "react";
import '../css/UserTypeForm.css';
import { Link } from "react-router-dom";

function UserTypeForm() {
  const [userType, setUserType] = useState('');

  const handleInputChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="UserTypeForm_container">
    <div className="UserTypeForm_form_container">
    <div className="left">
    <form className="form_container" onSubmit={handleSubmit}>
      <h1>LOGIN AS</h1>
      <div className="right">
          <Link to="/loginAdmin">
            <button type="button" className="white_btn">
              Admin
            </button>
          </Link>
        </div>
      <div className="right">
          <Link to="/LoginVolunteer">
            <button type="button" className="white_btn">
            Volunteer
            </button>
          </Link>
        </div>
        <div className="right">
          <Link to="/login">
            <button type="button" className="white_btn">
            User
            </button>
          </Link>
        </div>
    </form>
    </div>
    </div>
    </div>

  );
}

export default UserTypeForm;

