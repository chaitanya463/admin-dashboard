import React from "react";
import "./widgetsmall.css";

import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import { useState } from "react";
import UserDetailItem from "../gui/UserDetailItem";

const WidgetSmall = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const key in taskObj) {
        loadedTasks.push({
          id: key,
          username: taskObj[key].username,
          designation: taskObj[key].designation,
        });
      }
      setUsers(loadedTasks);
    };
    sendRequest(
      {
        url: "http://localhost:8080/api/users",
      },
      transformTasks
    );
  }, [sendRequest]);

  const detailItems = users.map((user) => (
    <UserDetailItem
      name={user.username}
      designation={user.designation}
    ></UserDetailItem>
  ));


  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle"> New join Members</span>
      {!error && users.length > 0 && (
        <ul className="widgetSmallList">{detailItems}</ul>
      )}
      {users.length === 0 && (
        <div className="widgetSmallNoUsers">
          <span>No users found!</span>
        </div>
      )}
    </div>
  );
};

export default WidgetSmall;
