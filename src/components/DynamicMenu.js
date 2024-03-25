import React, { useState, useEffect } from "react";
import "./DynamicMenu.scss";
import SearchBar from "./SearchBar";
const DynamicMenu = ({ items, moreitems }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 425 && screenWidth <= 768) {
      // If screen size is less than or equal to 768px
      // Move items to "More" section if they don't fit one by one
      const menuWidth = document.getElementById("menu").offsetWidth;
      let remainingWidth = menuWidth;
      const updatedMenuItems = [];
      const updatedMoreItems = [];

      for (let i = 0; i < items.length; i++) {
        const itemWidth = getTextWidth(items[i].label);
        if (itemWidth <= remainingWidth) {
          updatedMenuItems.push(items[i]);
          remainingWidth -= itemWidth;
        } else {
          updatedMoreItems.push(items[i]);
        }
      }

      setMenuItems(updatedMenuItems);
      setMoreItems(updatedMoreItems);
    } else {
      // If screen size is larger than 768px
      // Move items from "More" section back to main menu
      setMenuItems(items);
      setMoreItems([]);
    }
  };

  useEffect(() => {
    setMenuItems(moreitems);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  const getTextWidth = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "16px Arial";
    return context.measureText(text).width;
  };

  return (
    <div className="dynamic-menu">
      <div className="logo">Your Logo</div>
      <ul id="menu" className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.label}
          </li>
        ))}
        {moreItems.length > 0 && (
          <li className="more">
            MORE
            <ul className="more-items">
              {moreItems.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
          </li>
        )}
      </ul>
      <SearchBar/>
    </div>
  );
};

export default DynamicMenu;
