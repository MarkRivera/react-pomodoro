import { Exit } from "../assets/Exit"
import cx from 'classnames'

interface SettingsMenuProps {
  settingsMenu: boolean;
  toggleSettingsMenu: () => void;
}

const SettingsMenu = ({ settingsMenu, toggleSettingsMenu }: SettingsMenuProps) => {

  return (
    <div
      className={cx("bg-indigo-800 w-full md:w-1/3 h-full fixed right-0 top-0 transition-transform duration-200 ease-out", {
        "transform translate-x-0": settingsMenu,
        "transform translate-x-full": !settingsMenu
      })
      }
      onClick={() => toggleSettingsMenu()}
    >
      <Exit />
    </div>
  )
}

export default SettingsMenu