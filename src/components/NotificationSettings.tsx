import React from "react";
import { useNotificationViewModel } from "../viewmodels/useNotificationViewModel";
import mailIcon from "../assets/icons/mail.svg"
import keyIcon from "../assets/icons/key.svg"

const NotificationSettings: React.FC = () => {
    const { notifications, toggleNotification } = useNotificationViewModel();

    return (
        <div className=" mx-auto mt-4 p-8 bg-white rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-[#4D4D4D] mb-6">
                App Notifications
            </h3>

            <div className="space-y-3">
                {notifications.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border rounded-lg py-4 px-6 hover:bg-gray-50 transition cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-gray-500 text-lg">
                                {item.icon === "mail" &&
                                    <img
                                        src={mailIcon}
                                        className="w-5 h-5"
                                    />
                                }
                                {item.icon === "tool" &&
                                    <img
                                        src={keyIcon}
                                        className="w-5 h-5"
                                    />}
                            </div>
                            <span className="text-[#4D4D4D] text-sm">{item.label}</span>
                        </div>

                        <button
                            onClick={() => toggleNotification(item.id)}
                            className={`relative w-16 h-7 flex items-center rounded-full transition ${item.enabled ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`absolute left-1 w-5 h-5 bg-gray-400 rounded-full shadow-md transform transition ${item.enabled ? "translate-x-7" : "translate-x-0"
                                    }`}
                            />
                            <span className="absolute right-2 text-xs font-md text-dark">
                                {item.enabled ? "ON" : "OFF"}
                            </span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationSettings;
