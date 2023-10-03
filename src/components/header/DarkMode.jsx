import React from "react";
import Link from 'next/link';

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "is_light";
  const darkTheme = "is_dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "is_light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "is_dark");
      theme = darkTheme;
    }
  };
  return (
    <div className="mode-switcher">
      <Link
        className="sun mode-switch"
        href="#"
        onClick={(e) => switchTheme(e)}
      ></Link>
      <Link
        className="moon mode-switch"
        href="#"
        onClick={(e) => switchTheme(e)}
      ></Link>
    </div>
  );
};

export default DarkMode;
