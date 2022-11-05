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
      <header className="app-header contact">
        <h1>Contact Form</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>
      <form action="" className="mb-5">
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="formGroupExampleInput" className="form-label">
              First name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Last Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              aria-label="Last name"
            />
          </div>

          <div className="col-12">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="col-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Send a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>

          <div className="col-12 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              You agree to providing your data to name who may contact you
            </label>
          </div>

          <button className="w-100 btn btn-primary" type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
}
