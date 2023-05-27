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
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;

// export const UseStateContext = () => useContext(StateContext);
