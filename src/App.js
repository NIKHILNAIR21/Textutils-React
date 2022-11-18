import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode or not

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#050e22";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#c2e0f3";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          HomeText="HOME"
          AboutText="About us"
          mode={mode}
          togglemode={togglemode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <TextArea heading="Enter your text to format" mode={mode} />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
