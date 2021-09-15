import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import React, { useState } from "react";
import ALert from "./Component/ALert";
//import About from "./Component/About";
//import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(function () {
      setAlert(null);
    }, 2000);
  };

  const pallete = () => {
    if (mode === "light" || mode === "dark") {
      setMode("#339933");
      document.body.style.backgroundColor = "#339933";
    }
  };

  const toggleMode = () => {
    if (mode === "light" || mode === "#339933") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    {/* <Router>*/}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        pallete={pallete}
      />
      <ALert alert={alert} />
      <div className="container my-3">
      { /* <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">*/}
            <TextForm
              showAlert={showAlert}
              heading="Enter Text And See The Magic"
            />
          {/*</Route>
        </Switch>*/}
      </div>
   {/* </Router>*/}
    </>
  );
}

export default App;
