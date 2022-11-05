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
      <form action="">
        <header>
          <h1>Contact Form</h1>
        </header>
      </form>
    </>
  );
}
