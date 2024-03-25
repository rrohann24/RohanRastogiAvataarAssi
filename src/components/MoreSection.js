import React from "react";
import MenuItem from "./MenuItem";

const MoreSection = ({ items }) => {
  return (
    <li className="more">
      MORE ⌄
      <ul className="more-items">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </li>
  );
};

export default MoreSection;
