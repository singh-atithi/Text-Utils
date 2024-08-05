import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Footer from "./components/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      
      document.body.style.backgroundColor = "rgb(4,39,67)";
      showAlert("Dark mode enabled", "success");
    } else {
      setmode("light");
      
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} /> */}
          {/* </Routes> */}
        </div>
      <TextForm mode={mode} showAlert={showAlert} />
      <Footer  mode={mode} toggleMode={toggleMode}/>
      {/* </Router> */}
      {/* <About /> */}
    </>
  );
}

export default App;
