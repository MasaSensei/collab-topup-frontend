import { useStore } from "../../../../store/useStore/userStore";

const SidebarAdmin = ({ children }) => {
  const [state, dispatch] = useStore();
  const { sideBarOpen } = state.globalReducer;

  const openSidebar = () => {
    dispatch({ type: "SET_SIDEBAR", action: !sideBarOpen });
  };

  return (
    <aside className="min-h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-md">
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
            className="relative right-1 px-2 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">
            {sideBarOpen ? (
              <i className="fa-solid fa-chevron-left px-2" />
            ) : (
              <i className="fa-solid fa-chevron-right" />
            )}
          </button>
        </div>
        {/* <SidebarContext.Provider value={{ sideBarOpen }}> */}
        <ul className={`${sideBarOpen ? "mt-8" : "mt-2"} flex-1 px-3`}>
          {children}
        </ul>
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
