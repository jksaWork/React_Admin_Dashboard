import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { Cart, Chat, Notification, UserProfile } from "./index";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
// import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

function NavBar() {
  const { setActiveMenu, activeMenu, handleClick, isClicked } =
    useStateContext();
  return (
    <div className="p-3 flex justify-between bg-white navabr ">
      <NavButton
        title="menu"
        icon={<AiOutlineMenu />}
        color="blue"
        customFunc={() => setActiveMenu(!activeMenu)}
      />
      <div className="flex gap-1">
        <NavButton
          title="cart"
          icon={<FcShop />}
          color="blue"
          customFunc={() => handleClick("cart")}
        />
        <NavButton
          title="notification"
          icon={<RiNotification3Line />}
          color="blue"
          dotColor="red"
          customFunc={() => handleClick("notification")}
        />
        <NavButton
          title="notification"
          icon={<FcAbout />}
          color="blue"
          dotColor="red"
          customFunc={() => handleClick("notification")}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            onClick={() => handleClick("userprofile")}
            className="flex justify-center items-center mx-2"
          >
            <div className="font-bold">
              <span className="text-primary"> Hi ,{"ٍ"} </span>
              <span> Altigani </span>
            </div>
            <div className="image_container mx-2">
              <img src={avatar} class="w-10 h-10 mx-2 rounded-full" />
            </div>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default NavBar;