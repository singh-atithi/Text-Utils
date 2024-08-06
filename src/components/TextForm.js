import React, { useState } from "react";
import pngClipart from "./image/png-clipart.png";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to ClipBoard", "success");
  };
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const wordsCount = (word) => {
    let arr = word.replace(/\s+/g, " ");
    arr = arr.split(" ");
    return arr.length;
  };
  const countchar = (text) => {
    let count = 0;
    for (let i of text) {
      // Check for spaces and new lines
      if (i !== " " && i !== "\n" && i !== "\r") {
        count++;
      }
    }
    return count;
  };
  
  const countNumberOfSentenceAndQuestions = (word) => {
    word = word.trim();
    const sentences = word.split(/[.!?]/);
    const filteredTxt = sentences.filter(
      (sentences) => sentences.trim().length > 0
    );
    const totalsentences = filteredTxt.length;
    const questions = text.split(/[?]/);
    const totalQuetions = questions.length - 1;
    return {
      totalsentences: totalsentences,
      totalQuetions: totalQuetions,
    };
  };
  let resultTxt = countNumberOfSentenceAndQuestions(text);
  return (
    <>
      <div className={`container my-3 `}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            className={`text-${props.mode === "light" ? "dark" : "light"} my-4`}
          >
            Enter text to analyze
          </h2>
          <img
            src={pngClipart}
            alt="pic"
            className=" "
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              marginTop: "10px",
            }}
            onClick={speak}
          />{" "}
        </div>
        <div className="fmb-3">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            }my-4`}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(51, 102, 130)",
              color: props.mode === "light" ? "rgb(51, 102, 130)" : "white",
            }}
            value={text}
          ></textarea>
        </div>
        <div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-2 "
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-2"
            id="myBox"
            onClick={handlecopy}
          >
            Click to Copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-2"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-2"
            onClick={handleRemoveSpace}
          >
            Remove Space
          </button>
        </div>
      </div>{" "}
      <div
        className={`container my-2 text-${
          props.mode === "light" ? "dark" : "light"
        }my-4`}
      >
        <div
          className={`container my-2 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <h2>Your Next Summary</h2>
          <div className="container my-3">
            <pre
              className={`text-${
                props.mode === "light" ? "dark" : "light"
              } my-4`}
            >{` No. of Words      : ${wordsCount(text) - 1}
 No. of Characters : ${countchar(text)}
 No. of Sentences  : ${resultTxt.totalsentences} 
 No. of Questions  : ${resultTxt.totalQuetions}`}</pre>
          </div>
        </div>{" "}
        <div className="container">
          <h2
            className={`text-${props.mode === "light" ? "dark" : "light"} my-4`}
          >
            Preview
          </h2>
          <p
            className={`text-${
              props.mode === "light" ? "dark" : "light"
            } my-4 p-5`}
          >
            {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
              ? text
              : "Nothing To Preview Here"}
          </p>
        </div>{" "}
      </div>
    </>
  );
}
