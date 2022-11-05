import Link from "./Link";
import { useState } from "react";
import { Tooltip } from "./Tooltip";
import avatar from "./images/avatar-3.jpg";
import shareIcon from "./images/shareIcon.svg";
import hamburgerIcon from "./images/hamburger.svg";
import cameraIcon from "./images/camera.svg";
import slackLogo from "./images/slack.svg";
import githubLogo from "./images/github.svg";

export default function Home() {
  const [links, setLinks] = useState([
    {
      name: "Zuri Team - global network of highly intelligent workforce",
      url: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      name: "Perfect Hub for books on design & coding",
      title: "Perfect Hub for books on design & coding",
      url: "http://books.zuri.team/",
      id: "books",
    },
    {
      name: "Learn Python like a Pro! Get Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=helizabethan",
      id: "book__python",
    },
    {
      name: "Vetted by us, perfect for you! Rate your developers",
      url: "https://background.zuri.team/",
      id: "pitch",
    },
    {
      name: "Create truly professional design. Get our Design Book!",
      url: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
    {
      name: "Contact Me",
      url: "/contact",
      display: "router-link",
      id: "contact",
    },
  ]);

  return (
    <>
      <header className="app-header">
        <div className="container col-xxl-8 position-relative">
          <div className="app-profile-image">
            <img
              src={avatar}
              id="profile__img"
              className="app-logo rounded-circle"
              alt="profile-image"
            />
            <div className="overlay rounded-circle">
              <a
                href="#"
                className="app-profile-image-icon"
                title="User Profile"
              >
                <img src={cameraIcon} alt="" />
              </a>
            </div>
          </div>

          <h3 id="twitter" className="app-profile-name text-center">
            @helizabethan
          </h3>
          <p id="slack" className="app-profile-name d-none">
            helizabethan
          </p>

          <Tooltip text="Share link">
            <a href="#0" className="app-share-link d-none d-md-flex justify-content-center">
              <img src={shareIcon} />
            </a>
          </Tooltip>

          <Tooltip text="Share link">
            <a href="#0" className="app-share-link d-md-none">
              <img src={hamburgerIcon} />
            </a>
          </Tooltip>
        </div>
      </header>

      <div className="app-links  list-group">
        {links.map((item, i) => (
          <Link link={item} index={i} key={i} />
        ))}
      </div>

      <div className="app-social-links">
        <a href="">
          <img src={slackLogo} alt="" />
        </a>
        <a href="">
          <img src={githubLogo} alt="" />
        </a>
      </div>
    </>
  );
}
