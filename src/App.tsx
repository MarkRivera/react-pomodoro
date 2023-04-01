import './App.css'
import { invoke } from '@tauri-apps/api'
import { useContextMenu } from './hooks/useContextMenu'
import { useSettingsMenu } from './hooks/useSettingsMenu'
import Cog from './assets/Cog'
import SettingsMenu from './components/SettingsMenu'


const get_greeting = async () => {
  const message = await invoke('greet', { name: 'Mark' })
  return message;
}

function App() {
  // useContextMenu();
  const { settingsMenu, toggleSettingsMenu } = useSettingsMenu();
  async function getGreeting() {
    const message = await get_greeting();
    console.log(message);
  }

  getGreeting();

  return (
    <div className="bg-indigo-900 text-white h-full w-full mr-3 overflow-hidden">
      <Cog toggleSettingsMenu={toggleSettingsMenu} />
      <SettingsMenu settingsMenu={settingsMenu} toggleSettingsMenu={toggleSettingsMenu} />
    </div>
  )
}

export default App
