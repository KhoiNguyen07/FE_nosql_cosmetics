import React from "react";
import { IoIosClose } from "react-icons/io";
import "./style.scss";
import { useAnimationSidebar } from "~/hooks/useAnimationSidebar";
import MainContentSidebar from "./MainContent/MainContentSidebar";

const Sidebar = ({ isOpenSidebar, setIsOpenSidebar, titleSidebar }) => {
  // animation sidebar
  const { shouldRender, animationClass } = useAnimationSidebar(isOpenSidebar);

  return (
    <>
      {/* Overlay */}
      {shouldRender && (
        <div
          onClick={() => setIsOpenSidebar(false)}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-40"
        ></div>
      )}

      {/* Sidebar */}
      {shouldRender && (
        <div
          className={`${animationClass} fixed top-0 right-0 h-screen w-[280px] md:w-[350px] z-50 flex flex-col bg-white`}
        >
          {/* toggle close */}
          <button
            onClick={() => setIsOpenSidebar(false)}
            className="text-3xl -translate-x-16 top-5 p-2 bg-white rounded-full absolute cursor-pointer hover:bg-gray-200 transition-colors duration-300"
          >
            <IoIosClose />
          </button>

          {/* content in sidebar */}
          <MainContentSidebar
            titleSidebar={titleSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
