import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const user = localStorage.getItem("token");
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
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;