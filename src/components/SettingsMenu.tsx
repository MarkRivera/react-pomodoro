import { Exit } from "../assets/Exit"
import cx from 'classnames'

interface SettingsMenuProps {
  settingsMenu: boolean;
  toggleSettingsMenu: () => void;
}

const SettingsMenu = ({ settingsMenu, toggleSettingsMenu }: SettingsMenuProps) => {
  const handleSoundSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div
      className={cx("bg-indigo-800 w-full md:w-1/3 h-full fixed right-0 top-0 transition-transform duration-200 ease-out", {
        "transform translate-x-0": settingsMenu,
        "transform translate-x-full": !settingsMenu
      })
      }
      onClick={() => toggleSettingsMenu()}
    >
      <div className="flex items-center px-3">
        <h1 className="text-2xl">Settings</h1>
        <Exit />
      </div>

      <div className="flex flex-col items-center h-full" onClick={e => e.stopPropagation()}>
        <details className="w-full px-3 mt-8">
          <summary className="text-lg">Sound Settings</summary>
          <form onSubmit={handleSoundSubmit} className="pl-9 flex flex-col">
            <h1 className="my-2">Selected Sound</h1>
            <input type="file" />
            <button type="submit" className="w-40 h-10 mt-2 pl-2 border-white border-solid border-2 rounded hover:text-indigo-900 hover:bg-white transition-colors">Change</button>
          </form>
        </details>
        <details className="w-full px-3 mt-8">
          <summary className="text-lg">Button Settings</summary>
        </details>
      </div>
    </div>
  )
}

export default SettingsMenu