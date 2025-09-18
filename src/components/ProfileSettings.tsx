import React from "react";
import { useProfileViewModel } from "../viewmodels/useProfileViewModel";
import themeIcon from "../assets/icons/theme.svg"
import languageIcon from "../assets/icons/theme.svg"
import statusIcon from "../assets/icons/status.svg"
import mailIcon from "../assets/icons/mail.svg"
import keyIcon from "../assets/icons/key.svg"
import resetIcon from "../assets/icons/reset.svg"
import eyeIcon from "../assets/icons/eye.svg"

const ProfileSettings: React.FC = () => {
    const { profile } = useProfileViewModel();

    return (
        <div className="space-y-3 ">
            <div className="text-sm font-medium mx-auto mt-4 p-9 bg-white rounded-lg shadow-sm">
                <h3 className="mb-6 text-sm font-medium text-[#4D4D4D]">General</h3>
                <div className="space-y-2 bg-white">
                    <div className="flex justify-between border  items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3 ">
                            <div className="p-2 text-[#4D4D4D]">
                                <img src={themeIcon}
                                />
                            </div>
                            <span className="text-[#4D4D4D]">Theme</span>
                        </div>
                        <span className="text-[#909090]">{profile.theme}</span>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <img src={languageIcon}
                                />
                            </div>
                            <span className="text-[#4D4D4D]">Language</span>
                        </div>
                        <span className="text-[#909090]">{profile.language}</span>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <img src={statusIcon}
                                />
                            </div>
                            <span className="text-[#4D4D4D]">Account Status</span>
                        </div>
                        <span className="text-[#909090]">{profile.accountStatus}</span>
                    </div>
                </div>
            </div>

            <div className="text-sm font-medium  mx-auto mt-10 p-9  bg-white rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-[#4D4D4D] mb-4">Security</h3>
                <div className="space-y-2 bg-white">
                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <img src={mailIcon}
                                />
                            </div>
                            <span className="text-[#4D4D4D]">Email</span>
                        </div>
                        <span className="text-[#909090] text-sm">{profile.email}</span>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <img src={keyIcon}
                                />
                            </div>
                            <span className="text-[#4D4D4D]">Password</span>
                        </div>
                        <div className="flex justify-center items-center gap-6">
                            <span className="text-[#909090] text-sm">{profile.password}</span>
                            <button className="text-blue-500 hover:underline text-sm">
                                <img src={eyeIcon}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <img src={resetIcon}
                                />
                            </div>
                            <span className="text-[#4D4D4D]">Reset Password</span>
                        </div>
                        <button
                            className="text-blue-500 text-sm border border-blue-500 px-4 py-1 rounded hover:bg-blue-50"
                        >
                            Reset Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
