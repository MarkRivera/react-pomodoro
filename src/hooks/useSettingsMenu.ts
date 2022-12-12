import { useState } from "react";

export const useSettingsMenu = () => {
  const [settingsMenu, setSettingsMenu] = useState(false);
  const toggleSettingsMenu = () => {
    setSettingsMenu(!settingsMenu);
  };
  return { settingsMenu, toggleSettingsMenu };
}