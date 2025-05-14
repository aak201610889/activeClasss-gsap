// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider";
import ActiveButton from "./components/ActiveButton";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/activeButton" element={<ActiveButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
