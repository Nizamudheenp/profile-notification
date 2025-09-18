import React from "react";
import NotificationSettings from "../components/NotificationSettings";
import notificationIcon from "../assets/icons/notification.svg"

const Notification: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-28">
            <div className="flex items-center gap-3 py-6">
                <div className="w-10 h-10 flex items-center justify-center">
                    <img src={notificationIcon}
                    />
                </div>
                <div className="text-sm text-[#6B6B6B] select-none">Notifications</div>
            </div>
            <NotificationSettings />
        </div>
    );
};

export default Notification;
