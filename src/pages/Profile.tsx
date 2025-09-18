import React from "react";
import ProfileSettings from "../components/ProfileSettings";
import settingsIcon from "../assets/icons/settings.svg"

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-28">
      <div className="flex items-center gap-3 py-6">
                <div className="w-10 h-10 flex items-center justify-center">
                    <img src={settingsIcon}
                    />
                </div>
                <div className="text-sm text-[#6B6B6B] select-none">Profile settings</div>
            </div>
      <ProfileSettings />
    </div>
  );
};

export default Profile;
