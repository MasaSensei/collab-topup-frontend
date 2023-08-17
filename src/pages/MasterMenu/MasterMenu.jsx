// eslint-disable-next-line no-unused-vars
import React from "react";
import MainSidebar from "../../components/molecules/MainSidebar/MainSidebar";
import TopbarAdmin from "../../components/molecules/TopbarAdmin/TopbarAdmin";

const MasterMenu = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* SIDEBAR */}
      <MainSidebar />
      {/* MAIN PAGE */}
      <div className="w-full flex flex-col ">
        <TopbarAdmin />
        <div className="h-full bg-white p-4">Main Page Menu</div>
      </div>
    </div>
  );
};

export default MasterMenu;
