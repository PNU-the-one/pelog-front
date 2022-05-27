import Action from "type/action";
import Reducer from "type/reducer";

let store = {};
let reducer: Reducer;
const listener: (() => void)[] = [];

const dispatch = (action: Action) => {
  if (!reducer) return;
  store = reducer(store, action);
  listener.forEach((render) => render());
};

const subscribe = (render: () => void) => {
  listener.push(render);
};

const useSelector = (selector: (state: any) => any) => selector(store);

const configReducer = (newReducer: any) => {
  reducer = newReducer;
};

export { dispatch, subscribe, configReducer, useSelector };
