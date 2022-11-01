import { useState } from "react";
import Link from "./Link";
import avatar from "./images/avatar-3.jpg";
import shareIcon from "./images/shareIcon.svg";
import hamburgerIcon from "./images/hamburger.svg";
import zuriLogo from "./images/zuriLogo.svg";
import I4GLogo from "./images/I4G.svg";
import slackLogo from "./images/slack.svg";
import githubLogo from "./images/github.svg";
import "./App.css";

function App() {
  const [links, setLinks] = useState([
    { name: "Zuri Team", url: "https://training.zuri.team/", id: "btn__zuri" },
    { name: "Zuri Books", url: "http://books.zuri.team/", id: "books" },
    { name: "Python Books", url: "https://google.com" },
    { name: "Background Check for Coders", url: "https://google.com" },
    { name: "Design Books", url: "https://google.com" },
  ]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="container col-xxl-8 position-relative">
          <img
            src={avatar}
            id="profile__img"
            className="app-logo rounded-circle"
            alt="profile-image"
          />
          <p id="twitter" className="app-profile-name">
            @helizabethan
          </p>
          <p id="slack" className="app-profile-name d-none">
            helizabethan
          </p>
          <img src={shareIcon} className="app-share-link" />
          <img src={hamburgerIcon} className="app-share-link" />
        </div>
      </header>

      <main>
        <div className="container col-xxl-8">
          <div className="app-links  list-group">
            {links.map((item, i) => (
              <Link link={item} index={i} />
            ))}
          </div>
        </div>

        <div className="app-social-links">
          <a href="">
            <img src={slackLogo} alt="" />
          </a>
          <a href="">
            <img src={githubLogo} alt="" />
          </a>
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
