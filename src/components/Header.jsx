import { useState, useEffect } from "react";

import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"),
        localStorage.setItem("theme", "dark"); // localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); //  localStorage.theme = "light"
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto pt-12 px-8 md:max-w-xl">
      <div className="flex justify-between mb-10">
        <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.75rem]">
          todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconMoon /> : <IconSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
