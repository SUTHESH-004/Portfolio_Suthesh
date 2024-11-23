import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Experience from "./pages/Experience.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
