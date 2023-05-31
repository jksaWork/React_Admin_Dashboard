import React from "react";
import { FcBiohazard } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { AiOutlineRollback } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

import { useStateContext } from "../context/ContextProvider";
import { themeColors } from "../data";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function ThemeComponents(props) {
  //   let ThemeSetting = false;

  // const first = useContext(second)
  const {
    ThemeSetting,
    setThemeSetting,
    Mode,
    ChangeMode,
    ChangeColor,
    cureentColor,
  } = useStateContext();
  const currentColor = cureentColor;
  return (
    <div
      //  onClick={() => setThemeSetting(false)}
      className="w-full  cursor-pointer h-screen z-[200] absolute top-0 left-0 bg-black  bg-opacity-60  "
    >
      <div
        className={`h-screen bg-white   overflow-hidden duration-500 float-right transition-all z-[10] ease-in-out ${
          ThemeSetting ? "w-[350px]" : "w-0"
        }`}
      >
        <div className="flex justify-between mx-3 items-center">
          {/* Logo */}
          <div
            className="flex justify-between  py-3
         gap-2 items-center"
          >
            {/* <FcBiohazard size={30} /> */}
            <span className="font-extrabold  ">Theme Settigs</span>
          </div>
          {/* Cancel Button */}
          <div
            className="cursor-pointer font-bold"
            //   onClick={() => setActiveMenu(!activeMenu)}
          >
            <AiOutlineRollback size={20} />
          </div>
        </div>
        <div className="border-t-1 m-2 p-1">Theme Mode</div>
        <div className="border-t-1 m-2 p-1">
          <label htmlFor="light_radio">
            <input
              id="light_radio"
              type="radio"
              checked={Mode == "Light"}
              name="Mode"
              value="Light"
              onChange={ChangeMode}
            />
            <span className="mx-2">Light</span>
          </label>
          <br />
          <label htmlFor="Dark_radio">
            <input
              id="Dark_radio"
              type="radio"
              checked={Mode == "Dark"}
              name="Mode"
              value="Dark"
              onChange={ChangeMode}
            />
            <span className="mx-2">Dark</span>
          </label>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <Tooltip key={index} content={item.name} position="TopCenter">
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => ChangeColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
