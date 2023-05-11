import React from "react";
import "./topbar.css";
import {
  CircleNotificationsOutlined,
  Language,
  SettingsOutlined,
} from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">adminlogo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <CircleNotificationsOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <SettingsOutlined />
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2020/02/06/01/52/frame-4822807__480.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
