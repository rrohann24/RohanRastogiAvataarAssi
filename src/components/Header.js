import React from "react";
import MainMenu from "./MainMenu";

const Header = () => {
  const items = [
    { label: "HOME" },
    { label: "ELECTRONICS" },
    { label: "BOOKS" },
    { label: "MUSIC" },
    { label: "MOVIES" },
    { label: "CLOTHING" },
    { label: "GAMES" },

    { label: "FURNITURE" },
    { label: "ELECTRONICS" },
    { label: "TRAVEL" },
    { label: "BOTANICAL" },
    { label: "CATEGORY NAME" },
  ];
  return (
    <div>
      <MainMenu items={items} />
    </div>
  );
};

export default Header;
