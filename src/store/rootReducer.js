import { combineReducers } from 'redux' 
import { authSlice } from '../redux/authSlice'

export const rootReducer = combineReducers({
    auth: authSlice.reducer

})