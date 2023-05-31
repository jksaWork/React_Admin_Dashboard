import { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

const initialState = {
  cart: false,
  chat: false,
  userprofile: false,
  notification: false,
};

function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, SetScreenSize] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [ThemeSetting, setThemeSetting] = useState(true);
  const [cureentColor, setCureentColor] = useState("blue");
  const [Mode, setMode] = useState("light");

  const ChangeColor = (color) => {
    setCureentColor(color);
    localStorage.setItem("color", color);
    setThemeSetting(false);
  };

  const ChangeMode = (e) => {
    setMode(e.target.value);
    localStorage.setItem("mode", e.target.value);
    setThemeSetting(false);
  };

  // handleClick();
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        SetScreenSize,
        handleClick,
        isClicked,
        setIsClicked,
        ThemeSetting,
        setThemeSetting,
        ChangeColor,
        cureentColor,
        ChangeMode,
        Mode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;

// export const UseStateContext = () => useContext(StateContext);
