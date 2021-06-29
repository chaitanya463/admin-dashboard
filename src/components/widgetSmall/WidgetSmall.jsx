import React from "react";
import "./widgetsmall.css";
import { Visibility } from "@material-ui/icons";
import useHttp from "../../hooks/use-http";

const WidgetSmall = () => {

  const {} = useHttp();
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle"> New join Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="dp"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Rohan</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="dp"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Michael</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="dp"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">James</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="dp"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Flicher</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
