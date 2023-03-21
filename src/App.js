import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const setAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      setAlert("Dark mode has been enabled!", "success");
      document.title = "TextUtils (Dark)";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been enabled!", "success");
      document.title = "TextUtils (Light)";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse"
                  mode={mode}
                  setAlert={setAlert}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
