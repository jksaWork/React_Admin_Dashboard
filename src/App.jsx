import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FcSettings } from "react-icons/fc";
import { Sidebar } from "./components";
function App() {
  let style = {
    display: "inline-block",
    margin: "60px",
    // background: black,
  };

  const activeMenu = true;
  return (
    <div className="w-full flex  flex-row relative  dark:bg-main-dark">
      <div className="fixed bottom-5 right-5" style={style}>
        <TooltipComponent position="Top" content="Tooltip Content">
          <div className="text-3xl bg-light-gray  hover:drop-shadow-xl cursor-pointer rounded-[40px] p-2">
            <FcSettings />
          </div>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar border-x-1 drop-shadow-md dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 border-x-1 drop-shadow-md dark:bg-secondary-dark-bg bg-white">
          Hello World
        </div>
      )}
      {/*  */}
      <div
        className={` flex flex-row w-full  justify-center items-center dark:bg-main-dark-bg min-h-screen bg-main-bg  ${
          activeMenu ? "ml-72" : "flex-2"
        }`}
      >
        Body
      </div>
    </div>
  );
}

export default App;
