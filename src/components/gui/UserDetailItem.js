import React from "react";
import { Visibility } from "@material-ui/icons";
import './userdetailitem.css';

const UserDetailItem = (props) => {
  return (
    <li className="widgetSmallListItem">
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="dp"
        className="widgetSmallImg"
      />
      <div className="widgetSmallUser">
        <span className="widgetSmallUserName">{props.name}</span>
        <span className="widgetSmallUserTitle">{props.designation}</span>
      </div>
      <button className="widgetSmallButton">
        <Visibility className="widgetSmallIcon" />
        Display
      </button>
    </li>
  );
};

export default UserDetailItem;
