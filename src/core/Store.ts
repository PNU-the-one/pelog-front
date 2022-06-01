import mainReducer from "reducer/mainReducer";
import Action from "type/action";
import Reducer from "type/reducer";

let store: any = {
  isOpenLoginModal: false,
};
let reducer: Reducer;
const listener: { [key: string]: Function } = {};

const dispatch = (action: Action) => {
  if (!reducer) return;
  store = reducer(store, action);
  Object.keys(listener).forEach((key) => {
    listener[key]();
  });
};

const subscribe = (key: string, render: () => void) => {
  listener[key] = render;
};

const useSelector = (selector: (state: any) => any) => selector(store);

const configReducer = (newReducer: any) => {
  reducer = newReducer;
};

configReducer(mainReducer);

export { dispatch, subscribe, useSelector };
