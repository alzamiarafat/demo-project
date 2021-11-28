import { authSlice } from "./authSlice";

const { actions: slice } = authSlice;

export const LoginAction = (user) => (dispatch) => {
    dispatch(slice.setLogin(user))
}

export const LogoutAction = () => (dispatch) => {
    dispatch(slice.setLogout())
    
}