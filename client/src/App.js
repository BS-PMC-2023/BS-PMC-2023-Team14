import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login.jsx";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
    </Routes>
  );
}

export default App;
