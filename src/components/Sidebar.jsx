import React from "react";
import { FcBiohazard } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { links } from "../data/index";
import { NavLink } from "react-router-dom";
// import { useStateContext } './../context/ContextProvider';

import { useStateContext } from "../context/ContextProvider";
function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize, SetScreenSize } =
    useStateContext();

  const HandelClickMenu = () => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 hover:bg-blue-300";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div class="overflow-auto md:overflow-hidden md:hover:overflow-auto h-screen px-2 mr-2">
      <div className="flex justify-around items-center">
        {/* Logo */}
        <div
          className="flex justify-between p-2 py-3
         gap-2 items-center"
        >
          <FcBiohazard size={30} />
          <span className="font-extrabold  uppercase">Jksa Dashboard </span>
        </div>
        {/* Cancel Button */}
        {/* <div
          className="cursor-pointer font-extrabold"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MdDashboard size={20} />
        </div> */}
      </div>
      <div className="mt-3">
        {links.map((item) => (
          <div
            key={item.title}
            className="text-sm italic font-bold text-gray-500 mt-2 "
          >
            <span className="ml-2">{item.title}</span>
            <ul>
              {item.links.map((link) => (
                <NavLink
                  //    to={`/${link.name}`}
                  key={link.name}
                  onClick={HandelClickMenu}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ef81de" : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {<link.icon />}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
