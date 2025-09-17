import { useState } from "react";
import type { Profile } from "../models/profile";

export const useProfileViewModel = () => {
  const [profile, setProfile] = useState<Profile>({
    theme: "Light",
    language: "ENG-IN",
    accountStatus: "Active",
    email: "hemant.rangarajan@company.com",
    password: "********",
  });

  return { profile };
};
