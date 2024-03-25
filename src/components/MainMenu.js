import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import MoreSection from "./MoreSection";
import "./MainMenu.scss";
import SearchBar from "./SearchBar";
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
          src="https://assets.materialup.com/uploads/6201b674-8e98-40a9-9ad5-24f2cb5cd0f0/preview.gif"
        />
      </div>
      <ul className="menu-list">
        {visibleItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
        {moreItems.length > 0 && <MoreSection items={moreItems} />}
      </ul>
      <SearchBar/>
    </div>
  );
};

export default MainMenu;
