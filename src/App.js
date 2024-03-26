import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextArea from "./components/TextArea.js";
import React, { useState } from "react";
import Alert from "./Alert.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('#f8f9fa');

  const [alert, setalert] = useState(null);


  const showAlert = (type, message) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === '#f8f9fa') {
      setmode('rgb(33, 37, 41)');
      document.body.style.background = 'black';
      showAlert("success", "Dark Mode Enabled");
    }
    else {
      setmode('#f8f9fa');
      document.body.style.background = 'white';
      showAlert("success", "Light Mode Enabled");
    }
  }
  const newToggle = () => {
    if (mode === '#f8f9fa' || mode === 'rgb(33, 37, 41)') {
      setmode('#d63384')
      document.body.style.background = 'pink';
    }
    else if (mode === '#d63384') {
      setmode('red')
      document.body.style.background = 'orange'
      showAlert("success", "Orange Mode Enabled");
    }
    else if (mode === 'red') {
      setmode('#d63384')
      document.body.style.background = 'pink'
      showAlert("success", "Pink Mode Enabled");
    }


  }

  return (
    <>
      <Router>
        <Navbar Title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} newToggle={newToggle} />
        <Alert alert={alert} showAlert={showAlert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextArea Heading="Enter the Text" mode={mode} alert={alert} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;