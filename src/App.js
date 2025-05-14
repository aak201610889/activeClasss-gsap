// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider";
import ActiveButton from "./components/ActiveButton";
import ActiveTab from "./components/ActiveTab";
import FlipCard from "./components/FlipCard";
import FilterComponent from "./components/FilterComponent ";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/activeButton" element={<ActiveButton />} />
          <Route path="/ActiveTab" element={<ActiveTab />} />
          <Route path="/FlipCard" element={<FlipCard />} />
          <Route path="/FilterComponent" element={<FilterComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
