import { authSlice } from "./authSlice";

const { actions: slice } = authSlice;

export const LoginAction = (email) => (dispatch) => {
    dispatch(slice.setLogin(email))
}