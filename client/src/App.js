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
import HowToUse from "./components/HowToUse/HowToUse.jsx";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";

function App() {
  const isAdmin = localStorage.getItem("isAdmin");

  const userToken = localStorage.getItem("token");

  const Volunteers = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location = "/";
  };

  return (
    <BrowserRouter>
      {userToken && <Navbar isAdmin={isAdmin} handleLogout={handleLogout} />}
      <Routes>
        {userToken && <Route path="/" exact element={<Main />} />}
        {isAdmin && <Route path="/adminPanel" exact element={<AdminPanel />} />}

        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/Volunteers" exact element={<Volunteer />} />
        <Route path="/AboutPage" exact element={<AboutPage />} />
        <Route path="/UserTypeForm" exact element={<UserTypeForm />} />

        <Route path="/" element={<Navigate replace to="/UserTypeForm" />} />
        <Route path="/LoginVolunteer" exact element={<LoginVolunteer />} />
        <Route path="/HowToUse" exact element={<HowToUse />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
