import React from "react";
import { useProfileViewModel } from "../viewmodels/useProfileViewModel";
import { MdOutlineColorLens, MdOutlineManageAccounts, MdOutlineLanguage, MdOutlineEmail, MdOutlineKey, MdOutlineVisibility } from "react-icons/md";

const ProfileSettings: React.FC = () => {
    const { profile } = useProfileViewModel();

    return (
        <div className="space-y-3 ">
            {/* General Section */}
            <div className="text-sm font-medium mx-auto mt-10 p-9 bg-white rounded-lg shadow-sm">
                <h3 className="mb-6 text-sm font-medium text-[#4D4D4D]">General</h3>
                <div className="space-y-2 bg-white">
                    <div className="flex justify-between border  items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3 ">
                            <div className="p-2 text-[#4D4D4D] ">
                                <MdOutlineColorLens size={20} />
                            </div>
                            <span className="text-[#4D4D4D]">Theme</span>
                        </div>
                        <span className="text-[#909090]">{profile.theme}</span>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <MdOutlineLanguage size={20} />
                            </div>
                            <span className="text-[#4D4D4D]">Language</span>
                        </div>
                        <span className="text-[#909090]">{profile.language}</span>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <MdOutlineManageAccounts size={20} />
                            </div>
                            <span className="text-[#4D4D4D]">Account Status</span>
                        </div>
                        <span className="text-[#909090]">{profile.accountStatus}</span>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className="text-sm font-medium  mx-auto mt-10 p-9  bg-white rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-[#4D4D4D] mb-4">Security</h3>
                <div className="space-y-2 bg-white">
                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <MdOutlineEmail size={20} />
                            </div>
                            <span className="text-[#4D4D4D]">Email</span>
                        </div>
                        <span className="text-[#909090] text-sm">{profile.email}</span>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <MdOutlineKey size={20} />
                            </div>
                            <span className="text-[#4D4D4D]">Password</span>
                        </div>
                        <div className="flex justify-center items-center gap-6">
                            <span className="text-[#909090] text-sm">{profile.password}</span>
                            <button className="text-blue-500 hover:underline text-sm">
                                <MdOutlineVisibility size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between border items-center py-3 px-5 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="p-2 text-[#4D4D4D]">
                                <MdOutlineManageAccounts size={20} />
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
