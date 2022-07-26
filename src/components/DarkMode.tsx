import React, { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => localStorage.theme === "dark");

  const toggleDarkMode: any = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    const prev = theme ? "light" : "dark";
    html.classList.remove(prev);

    const next = theme ? "dark" : "light";
    html.classList.add(next);

    localStorage.setItem("theme", next);
  }, [theme]);

  return [theme, toggleDarkMode];
};

export default useDarkMode;
