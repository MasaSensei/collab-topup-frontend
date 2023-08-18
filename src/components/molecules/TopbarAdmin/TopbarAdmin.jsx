import Paragraph from "../../atoms/Paragraph/Paragraph";

const TopbarAdmin = () => {
  return (
    <div>
      <div className="w-full bg-slate-700 h-14 flex justify-between items-center px-8 text-white">
        <Paragraph size="sm" variant="white" weight="normal">
          Menu Name
        </Paragraph>
        <div>Profile</div>
      </div>
      <div className="absolute right-6 top-[3.6rem] hidden">
        <ul className="mt-1 px-2 py-4 w-[10rem] bg-slate-700 text-white text-sm rounded-md space-y-5 ">
          <li className="hover:bg-slate-400 cursor-pointer px-2 rounded-md">
            Profile
          </li>
          <li className="hover:bg-slate-400 cursor-pointer px-2 rounded-md">
            Setting
          </li>
          <li className="hover:bg-slate-400 cursor-pointer px-2 rounded-md">
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopbarAdmin;
