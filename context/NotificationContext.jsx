"use client";

import React, { createContext, useEffect, useRef, useState } from "react";
import "./notification.css";
import InformationIcon from "@/components/icons/InformationIcon";
import { config } from "@/appconfig";
export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [currNotification, setCurrNotification] = useState();
  const notificationRef = useRef(null);

  // Add a new notification to the list of notifications and display it
  function addNotification({ content, type }) {
    if (currNotification == null) {
      let id = Date.now() + Math.random().toString(36).slice(2, 5);
      setNotifications([...notifications, { content, type, id }]);
    }
  }

  let timeoutChangeAnimation = null;
  let timeoutRemoveNotification = null;

  useEffect(() => {
    if (notifications.length > 0) {
      const newNotification = notifications[0];
      setCurrNotification(newNotification);
      setNotifications(notifications.filter((n) => n.id != newNotification.id));
      timeoutChangeAnimation = setTimeout(() => {
        closeNotification();
      }, config.notificationTimeOut);

      timeoutRemoveNotification = setTimeout(() => {
        setCurrNotification(null);
      }, config.notificationTimeOut + 500);
    }
  }, [notifications]);

  const closeNotification = () => {
    notificationRef.current.classList.remove("notification-animate-in");
    notificationRef.current.classList.add("notification-animate-out");
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {currNotification && (
        <div
          className="notification notification-animate-in"
          ref={notificationRef}
          onClick={closeNotification}
        >
          <div className="notification-icon d-flex-center ">
            <InformationIcon
              color={config.style.colors[currNotification.type]}
              size={"40"}
            />
          </div>
          <p>{currNotification.content}</p>
        </div>
      )}
    </NotificationContext.Provider>
  );
}
