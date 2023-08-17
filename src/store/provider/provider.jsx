import { useMemo, useReducer } from "react";
import combineReducers, { InitState } from "..";
import globalReducer from "../reducer/global";
import Context from "../context/context";

const rootReducer = combineReducers({
  globalReducer,
});

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, InitState);
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <Context.Provider value={store}>
      {/* <RouterProvider router={router} /> */}
      {/* <MainApp /> */}
      {children}
    </Context.Provider>
  );
};
