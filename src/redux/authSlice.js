import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogged: false,
        user: ''
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLogged = true
            state.user = action.payload
        },
        setLogout: (state, action) => {
            state.isLogged = false
            state.user = ''
        }
    }
})
