import { SET_REGISTER_INFO } from "store/types/registerType";

const DEFAULT_STATE = {
  registerInfo: null,
};

if (localStorage.getItem("REGISTER_INFO_KEY")) {
  DEFAULT_STATE.registerInfo = JSON.parse(
    localStorage.getItem("REGISTER_INFO_KEY")
  );
}
export const registerReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_REGISTER_INFO: {
      state.registerInfo = payload;
      break;
    }

    default:
      break;
  }

  return { ...state };
};
