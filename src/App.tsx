import ThemeSwitcher from "./components/ThemeSwitcher";
import { PageNoteEditExample } from "./pages/PageNoteEdit";
import { PagePasswordEditExample } from "./pages/PagePasswordEdit";

export default function App() {
  return <div className="
    min-h-screen w-screen
    text-[#333] bg-[#FFE]
    dark:text-[#EED] dark:bg-[#323]
  ">
    <main>
      {true && <PagePasswordEditExample />}
      {false && <PageNoteEditExample />}
      <ThemeSwitcher />
    </main>
  </div>
}
