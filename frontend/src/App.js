import "./App.css";
import AdminPanel from "./Pages/AdminPanel";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
