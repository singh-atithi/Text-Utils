import React, { useState } from "react";
import pngClipart from "./png-clipart.png";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handlecopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to ClipBoard","success");
  }  
  const handleRemoveSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join (" "));
    props.showAlert("Removed extra spaces","success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className={`container my-5 `}>
        <h2 className={`text-${props.mode==='light'?'dark':'light'} my-4`}>Enter text to analyze</h2>
        <div className="fmb-3">
          <textarea 
            className={`form-control text-${props.mode==='light'?'dark':'light'}my-4`} 
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='light'?'white':'gray'}}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-2" id="myBox" onClick={handlecopy}>
          Click to Copy
        </button>
        
        <button className="btn btn-primary my-3 mx-2" onClick={handleRemoveSpace}>
          Remove Space
        </button>

        <img
          src={pngClipart}
          alt="pic"
          className="my-3 mx-2 "
          style={{
            cursor: "pointer",
            width: "50px",
            height: "auto",
          }}
          onClick={speak}
        />
      </div>
            <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}my-4` }>
      <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}` }>
        <h2>Your Next Summary</h2>
        <p>
          {text.split(" ").length-1} words , {text.length} characters
        </p>
      </div>
      <div className="container">
        <h2 className={`text-${props.mode==='light'?'dark':'light'} my-4`}>Preview</h2>
        <p className={`text-${props.mode==='light'?'dark':'light'} my-4 p-5`}>{text.length>0?text:"Enter something in the text box above to preview it here"} </p>
      </div>
      </div>
    </>
  );
}
