import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FcSettings } from "react-icons/fc";
import { Sidebar, NavBar } from "./components";
import { useStateContext } from "./context/ContextProvider";
function App() {
  let style = {
    display: "inline-block",
    margin: "60px",
    // background: black,
  };

  const { activeMenu, setActiveMenu, screenSize, SetScreenSize } =
    useStateContext();

  useEffect(() => {
    const HandelAppVaribales = () => SetScreenSize(window.innerWidth);
    window.addEventListener("resize", HandelAppVaribales);
    return () => {
      window.removeEventListener("resize", HandelAppVaribales);
    };
  });

  useEffect(() => {
    console.log(screenSize);
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="w-full flex flex-row relative dark:bg-main-dark">
      <div className="fixed bottom-5 right-5" style={style}>
        <TooltipComponent position="Top" content="Tooltip Content">
          <div className="text-3xl bg-light-gray  hover:drop-shadow-xl cursor-pointer rounded-[40px] p-2">
            <FcSettings />
          </div>
        </TooltipComponent>
      </div>
      <div
        className={`
        w-72 transition-all ease-in-out fixed sidebar border-x-1 drop-shadow-md dark:bg-secondary-dark-bg bg-white
        ${activeMenu ? "left-0" : "left-[-18rem]"}
      `}
      >
        <Sidebar />
      </div>
      {/*  */}
      <div
        className={`transition-all flex flex-col w-full dark:bg-main-dark-bg min-h-screen bg-main-bg  ${
          activeMenu ? "ml-72" : "flex-2"
        }`}
      >
        <NavBar />
      </div>
    </div>
  );
}

export default App;
