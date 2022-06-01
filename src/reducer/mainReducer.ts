import Reducer from "type/reducer";

const mainReducer: Reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return { ...state, isOpenLoginModal: true };
    case "CLOSE_LOGIN_MODAL":
      return { ...state, isOpenLoginModal: false };
    default:
      return { ...state };
  }
};

export default mainReducer;
