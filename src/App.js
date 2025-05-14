// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Slider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
