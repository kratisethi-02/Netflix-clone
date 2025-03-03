import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  // Define the scroll listener function
  const scrollListener = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", scrollListener);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="netflix avatar"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
