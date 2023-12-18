import { configureStore } from "@reduxjs/toolkit";
import { articalApi }  from "./Artical";
export const Store = configureStore({
    reducer:{
        [articalApi.reducerPath]: articalApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articalApi.middleware) 
});