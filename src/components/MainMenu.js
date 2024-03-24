import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import MoreSection from "./MoreSection";
import "./MainMenu.scss";

const MainMenu = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 6)); 
  const [moreItems, setMoreItems] = useState(items.slice(6)); 

  const calculateMenuItems = () => {
    const menuWidth = document.getElementById("main-menu").offsetWidth;
    const menuItemWidth = 100; 
    const maxItems = Math.floor(menuWidth / menuItemWidth);

    if (items.length > maxItems) {
      setVisibleItems(items.slice(0, maxItems - 1)); 
      setMoreItems(items.slice(maxItems - 1));
    } else {
      setVisibleItems(items);
      setMoreItems([]);
    }
  };

  useEffect(() => {
    calculateMenuItems();
    window.addEventListener("resize", calculateMenuItems);
    return () => {
      window.removeEventListener("resize", calculateMenuItems);
    };
  }, [items]);

  return (
    <div id="main-menu" className="main-menu">
      <div>
        <img
          className="logo"
          alt="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-Commerce-Logo-Design-scaled.jpg"
        />
      </div>
      <ul className="menu-list">
        {visibleItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
        {moreItems.length > 0 && <MoreSection items={moreItems} />}
      </ul>
      <div className="search-bar">Search</div>
    </div>
  );
};

export default MainMenu;
