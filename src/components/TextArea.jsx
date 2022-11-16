import React, { useState } from "react";
import "../styling/TextArea.css";

export default function TextArea(props) {
  // uppercasefunc
  const uppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  //lowercasefunc
  const lowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  //cleartext
  const clear = () => {
    const newText = "";
    setText(newText);
  };

  const handleExtraspce = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const handle = (event) => {
    setText(event.target.value);
  };
  //text to speech
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="my-4">
        <div
          className="mb-4 main"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="Mybox"
            value={text}
            placeholder="Enter text here"
            onChange={handle}
            rows="3"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0a0e16",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary btn1" onClick={uppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary btn2" onClick={lowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary btn3" onClick={clear}>
          clear text
        </button>
        <button className="btn btn-primary btn4" onClick={handleExtraspce}>
          clear extra space
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning btn5"
          id="btn"
        >
          Speech
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="summary">Your text summary</h1>
        <p>
          {text.split(" ").length} and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes will be taken to read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
