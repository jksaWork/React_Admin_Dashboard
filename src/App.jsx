import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FcSettings } from "react-icons/fc";
import { Sidebar, NavBar, ThemeComponents } from "./components";
import { useStateContext } from "./context/ContextProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customers, Ecommerce, Employee, Orders } from "./Pages";

function App() {
  let style = {
    display: "inline-block",
    margin: "60px",
    // background: black,
  };

  const {
    ThemeSetting,
    setThemeSetting,
    activeMenu,
    setActiveMenu,
    screenSize,
    SetScreenSize,
    Mode,
  } = useStateContext();

  useEffect(() => {
    const HandelAppVaribales = () => SetScreenSize(window.innerWidth);
    window.addEventListener("resize", HandelAppVaribales);
    return () => {
      window.removeEventListener("resize", HandelAppVaribales);
    };
  });

  useEffect(() => {
    console.log(screenSize);
    if (screenSize <= 700) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <BrowserRouter>
      <div
        className={`w-full flex flex-row relative dark:bg-main-dark ${
          Mode == "Dark" ? "dark" : ""
        }`}
      >
        <div
          className="fixed bottom-5 right-0  z-[100]"
          style={style}
          onClick={() => setThemeSetting(true)}
        >
          <TooltipComponent position="Top" content="Tooltip Content">
            <div className="text-3xl bg-light-gray  hover:drop-shadow-xl cursor-pointer rounded-[40px] p-2">
              <FcSettings />
            </div>
          </TooltipComponent>
        </div>
        {ThemeSetting && <ThemeComponents />}
        <div
          className={`
        w-72 transition-all z-[10] ease-in-out drop-shadow-md fixed sidebar border-x-1  dark:bg-secondary-dark-bg bg-white
        ${activeMenu ? "left-0" : "left-[-18rem]"}
      `}
        >
          <Sidebar />
        </div>
        {/*  */}
        <div
          className={`transition-all  flex flex-col  dark:bg-main-dark-bg min-h-screen bg-main-bg relative  ${
            activeMenu ? "ml-72 w-4/5" : "w-full"
          }`}
        >
          <div className="sticky top-0 left-0 z-10">
            <NavBar />
          </div>

          {/* <RouterProvider router={router} /> */}
          <div className={`box-border p-10 ${activeMenu ? "w-[95%]" : ""}`}>
            {/* <div className="w-full  bg-gradient-to-r from-blue-500 to-transparent fixed z-[1] top-0 left-0 h-[300px]"></div> */}
            <div className="z-[3]">
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/calendar" element={<Scheduler />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
