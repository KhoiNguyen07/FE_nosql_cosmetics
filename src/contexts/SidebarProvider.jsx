import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [titleSidebar, setTitleSidebar] = useState({});
  const [currentItemToSee, setCurrentItemToSee] = useState(null);

  return (
    <SidebarContext.Provider
      value={{
        isOpenSidebar,
        setIsOpenSidebar,
        titleSidebar,
        setTitleSidebar,
        currentItemToSee,
        setCurrentItemToSee
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
