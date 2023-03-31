import React, { useState } from "react";
import "./ListItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOffAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";

const ListItem = ({index, value}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: hovered && index * 235 - 50 + index * 2.5}} // depending on which box is hovered calculate the width px and assign accordingly
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={value} alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpOutlined className="icon"/>
          <ThumbDownOffAltOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>2 hour 12min</span>
          <span className="limit">+18</span>
          <span>2015</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ea
          numquam qui cum minima mollitia alias dignissimos ipsa
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
