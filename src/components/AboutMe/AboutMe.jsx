import React from "react";
import "./AboutMe.css";
import ProfilePic from "../../images/second_pic.png";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="profile-section">
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h1 className="title">Kiki Doe</h1>
          <p className="subtitle">Frontend Developer</p>
        </div>
      </div>
      <div className="bio-section">
        <h2 className="section-title">About Me</h2>
        <p className="bio">
          Hi, I'm Kiki! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum.
        </p>
      </div>
      <div className="project-section">
        <h2 className="section-title">Projects</h2>
        <div className="project">
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        <div className="project">
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
      </div>
      <div className="contact-section">
        <h2 className="section-title">Contact Information</h2>
        <p className="contact-info">
          Email: dummyemail@gmail.com <br />
          Phone: 93898992912 <br />
          Location: Koramangala
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
