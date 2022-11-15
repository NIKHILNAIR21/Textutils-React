import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

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
      <Navbar
        title="TextUtils"
        HomeText="HOME"
        AboutText="About us"
        mode={mode}
        togglemode={togglemode}
      />
      <TextArea heading="Enter your text to format" mode={mode} />
    </>
  );
}

export default App;
