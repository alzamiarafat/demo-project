import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogged: false,
        email:'',
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLogged = true
            state.email = action.payload
        }
    }
})
