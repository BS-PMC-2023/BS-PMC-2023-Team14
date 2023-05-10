import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/Navbar";
import Volunteer from "./components/Volunteer/Volunteers.jsx";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import UserTypeForm from "./components/UserTypeForm/UserTypeForm.jsx";
import LoginVolunteer from "./components/LoginVolunteer/index.jsx";
function App() {
  const user = localStorage.getItem("token");
  const Volunteers = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <BrowserRouter>
      {user && <Navbar handleLogout={handleLogout} />}
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />

        <Route path="/contact" exact element={<Contact />} />
        <Route path="/Volunteers" exact element={<Volunteer />} />
        <Route path="/AboutPage" exact element={<AboutPage />} />
        <Route path="/UserTypeForm" exact element={<UserTypeForm />} />
        <Route path="/" element={<Navigate replace to="/UserTypeForm" />} />
        <Route path="/LoginVolunteer" exact element={<LoginVolunteer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
