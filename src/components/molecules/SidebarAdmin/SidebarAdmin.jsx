import { createContext, useContext, useState } from "react";
import { useStore } from "../../../store/useStore/userStore";

// const SidebarContext = createContext();

const SidebarAdmin = ({ children }) => {
  const [state, dispatch] = useStore();
  const { sideBarOpen } = state.globalReducer;

  const openSidebar = () => {
    dispatch({ type: "SET_SIDEBAR", action: !sideBarOpen });
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 space-x-2  flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              sideBarOpen ? "w-32" : "w-0"
            }`}
            alt="logo"
          />
          <button
            onClick={openSidebar}
            // onClick={() => setExpanded((curr) => !curr)}
            className="px-3 py-1 rounded-lg bg-gray-50 hover:bg-gray-100">
            {sideBarOpen ? (
              <i className="fa-solid fa-chevron-left" />
            ) : (
              <i className="fa-solid fa-chevron-right" />
            )}
          </button>
        </div>
        {/* <SidebarContext.Provider value={{ sideBarOpen }}> */}
        <ul className="mt-8 flex-1 px-3 ">{children}</ul>
        {/* </SidebarContext.Provider> */}

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=random"
            alt="avatar"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
             flex justify-between items-center
             overflow-hidden transition-all ${sideBarOpen ? "w-52 ml-3" : "w-0"}
         `}>
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;

export function SidebarItem(props) {
  const { icon, text, active, alert } = props;
  const [state] = useStore();
  const { sideBarOpen } = state.globalReducer;
  // const { expanded } = useContext(SidebarContext);
  return (
    <>
      <li
        className={`relative flex items-center py-2 px-3 
      my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
          : "hover:bg-blue-50 text-gray-600"
      }`}>
        <div>
          <i className={icon}></i>
        </div>
        <span
          className={`overflow-hidden transition-all ${
            sideBarOpen ? "w-52 ml-3" : "w-0"
          }`}>
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-blue-400 ${
              sideBarOpen ? "" : "top-2"
            }`}
          />
        )}
        {!sideBarOpen && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 
          bg-blue-100 text-blue-800 text-sm invisible opacity-20 
          -translate-x-3 transition-all group-hover:visible 
          group-hover:opacity-100 group-hover:translate-x-0`}>
            {text}
          </div>
        )}
      </li>
    </>
  );
}
