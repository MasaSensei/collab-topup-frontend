import { useEffect } from "react";
import { axiosFunc } from "../../../lib";
import { useStore } from "../../../store/useStore/userStore";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
import SidebarItem from "./SidebarItem/SidebarItem";

const MainSidebar = () => {
  const [state, dispatch] = useStore();
  const { sideBarOpen, menuUser } = state.globalReducer;

  const getMenu = async () => {
    const data = {
      params: { id: 1 },
      token: "token",
    };
    const menus = await axiosFunc("get", "/api/v1/master/menu", data);
    if (menus.status == 200) {
      // SET MENU INITIALZATION
      const menusData = JSON.stringify(menus.data.data);
      localStorage.setItem("menuUser", menusData);
      dispatch({ type: "SET_MENU_USER", action: menus.data.data });
    } else {
      console.log("something went wrong");
    }
  };

  const getMenuFromLocalStorage = () => {
    const localMenu = localStorage.getItem("menuUser");
    dispatch({ type: "SET_MENU_USER", action: JSON.parse(localMenu) });
  };

  useEffect(() => {
    if (localStorage.getItem("menuUser") == null || undefined) {
      console.log("SET MENU INITIALIZE");
      getMenu();
      return;
    }
    console.log("SET MENU LOCAL");
    getMenuFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SidebarAdmin>
      {menuUser.map((menu, index) => (
        <div key={index}>
          <div
            className={`ml-2 py-2 font-semibold ${
              sideBarOpen ? "" : "hidden"
            }`}>
            {menu.label}
          </div>
          {menu?.submenu.map((sub, subIndex) => {
            return (
              <SidebarItem
                key={subIndex}
                id={subIndex}
                text={sub.submenu_name}
                icon={sub.icon}
                path={sub.path_url}
              />
            );
          })}
        </div>
      ))}
    </SidebarAdmin>
  );
};

export default MainSidebar;
