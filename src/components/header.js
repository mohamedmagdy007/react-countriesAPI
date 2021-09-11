import React, { useEffect, useState } from "react";
export default function Header() {
  const [darkMode, setDarkMode] = useState(getDefaultTheme());
  const changeMode = () => {
    setDarkMode((prevTheme) => !prevTheme);
  };
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    if (darkMode === true) {
      document.documentElement.style.setProperty(
        "--backColor--",
        `${darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"}`
      );
      document.documentElement.style.setProperty(
        "--textColor--",
        `${darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`
      );
      document.documentElement.style.setProperty(
        "--elementsBackColor--",
        `${darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"}`
      );
      document.documentElement.style.setProperty(
        "--inputTextColor--",
        `${darkMode ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)"}`
      );
      document.getElementsByTagName("body")[0].style.background =
        "hsl(209deg 26% 17%)";
      document.getElementsByTagName("body")[0].style.color = "hsl(0, 0%, 100%)";
    } else {
      document.documentElement.style.setProperty(
        "--backColor--",
        `${darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"}`
      );
      document.documentElement.style.setProperty(
        "--textColor--",
        `${darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`
      );
      document.documentElement.style.setProperty(
        "--elementsBackColor--",
        `${darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"}`
      );
      document.documentElement.style.setProperty(
        "--inputTextColor--",
        `${darkMode ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)"}`
      );
      document.getElementsByTagName("body")[0].style.background =
        "hsl(0, 0%, 100%)";
      document.getElementsByTagName("body")[0].style.color =
        "hsl(209, 23%, 22%)";
    }
  }, [darkMode]);
  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="brand">Where in the World?</div>
          <div className="mode" onClick={changeMode}>
            <i className={`fa fa-${darkMode ? "sun-o" : "moon-o"}`}></i>{" "}
            {darkMode ? "Light" : "Dark"} Mode
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
