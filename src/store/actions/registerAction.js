import { SET_REGISTER_INFO } from "store/types/registerType"

export const registerInfoAction = (data) => {
    return {
        type: SET_REGISTER_INFO,
        payload: data,
    }
}