import Home from "./Home";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import zuriLogo from "./images/zuriLogo.svg";
import I4GLogo from "./images/I4G.svg";
import "./App.css";

function App() {

  return (
    <div className="app">

      <main>
        <div className="container col-xxl-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <footer className="app-footer">
        <div className="container col-xxl-9">
          <div className="app-footer-wrapper flex-md-row align-items-md-center">
            <img src={zuriLogo} />
            <p className="m-0">HNG Internship 9 Frontend Task</p>
            <img src={I4GLogo} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
