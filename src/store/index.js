import { initGlobal } from "./reducer/global";

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

// const reducer = combineReducers({ globalReducer });
const InitState = {
  globalReducer: initGlobal,
};

function reduceReducers(...reducers) {
  return (state, action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);
}

export default combineReducers;
export { InitState, reduceReducers };
