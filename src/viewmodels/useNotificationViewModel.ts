import { useState } from "react";
import type { Notification } from "../models/notifcation";

export const useNotificationViewModel = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      label: "Task updates or assigned items",
      icon: "mail",
      enabled: false,
    },
    {
      id: 2,
      label: "System maintenance alerts",
      icon: "tool",
      enabled: false,
    },
  ]);

  const toggleNotification = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, enabled: !n.enabled } : n
      )
    );
  };

  return { notifications, toggleNotification };
};