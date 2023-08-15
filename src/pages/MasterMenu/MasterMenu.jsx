// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import SidebarAdmin, {
  SidebarItem,
} from "../../components/molecules/SidebarAdmin/SidebarAdmin";
import { useStore } from "../../store/useStore/userStore";
import { setLoading } from "../../store/action/global";

const MasterMenu = () => {
  const [state, dispatch] = useStore();
  const { sideBarOpen } = state.globalReducer;
  console.log(sideBarOpen, "STATE");

  const onSubmit = () => {
    dispatch(setLoading(true));
  };

  const menu = [
    {
      id: 1,
      name: "Home",
      icon: "fa-solid fa-house",
      active: true,
      alert: false,
    },
    {
      id: 2,
      name: "Account",
      icon: "fa-solid fa-file-invoice",
      active: false,
      alert: false,
    },
    {
      id: 3,
      name: "Cards",
      icon: "fa-solid fa-folder",
      active: false,
      alert: true,
    },
    {
      id: 4,
      name: "Settings",
      icon: "fa-solid fa-gear",
      active: false,
      alert: false,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex">
      {/* SIDEBAR */}
      <SidebarAdmin>
        {menu.map((menu) => {
          return (
            <SidebarItem
              key={menu.id}
              icon={menu.icon}
              text={menu.name}
              active={menu.active}
              alert={menu.alert}
            />
          );
        })}
      </SidebarAdmin>
      {/* MAIN */}
      <div>main page</div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default MasterMenu;
