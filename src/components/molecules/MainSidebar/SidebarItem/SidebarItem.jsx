import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../../../store/useStore/userStore";
import "./sidebar.css";
import { useEffect } from "react";

export default function SidebarItem(props) {
  const { id, icon, text, alert, path } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const [state, dispatch] = useStore();
  const { sideBarOpen, activeUrl } = state.globalReducer;

  const handleActiveUrl = () => {
    dispatch({ type: "SET_ACTIVE_URL", action: location.pathname });
  };

  useEffect(() => {
    handleActiveUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li
      key={id}
      onClick={() => navigate(path)}
      className={`sidebar-base group ${
        activeUrl == path ? "sidebar-active" : "hover:bg-blue-50 text-gray-600"
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
      {!sideBarOpen && <div className={`sidebar-text`}>{text}</div>}
    </li>
  );
}
