const initGlobal = {
  isLoading: false,
  isLogin: true,
  sideBarOpen: true,
  activeUrl: "",
  menuUser: [],
};

const globalReducer = (state, payload) => {
  switch (payload.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: payload.action,
      };
    case "SET_LOGIN":
      return {
        ...state,
        isLogin: payload.action,
      };
    case "SET_SIDEBAR":
      return {
        ...state,
        sideBarOpen: payload.action,
      };
    case "SET_ACTIVE_URL":
      return {
        ...state,
        activeUrl: payload.action,
      };
    case "SET_MENU_USER":
      return {
        ...state,
        menuUser: payload.action,
      };
    default:
      return state;
  }
};

export default globalReducer;
export { initGlobal };
