import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware,
    devTools: process.env.NODE_ENV !== "production"
})

export const persistor = persistStore(store);