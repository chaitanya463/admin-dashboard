import React from "react";
import "./topbar.css";

import { NotificationsNone, Settings, Language } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LG Admin</span>
        </div>
        <div className="topRight">
          
          <div className="iconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="iconContainer">
            <Language />
          </div>
          <div className="iconContainer">
            <Settings />
          </div>
          <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' alt='' className='topAvatar'/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
