import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation-bar">
        <img
          className="logo"
          alt="Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgpKumeCpVLXKFXQ4DP2V-UK9ijQGkzW2CA&usqp=CAU"
        />
        <div className="right-tab">
          <ul className="list-items">
            <li>HOME</li>
            <li>ELECTRONICS</li>
            <li>BOOKS</li>
            <li>MUSIC</li>
            <li>MOVIES</li>
            <li>CLOTHING</li>
            <li>GAMES</li>
            <li>MORE 🔽</li>
            <li >
                <input></input>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
