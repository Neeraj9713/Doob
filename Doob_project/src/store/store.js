import { configureStore } from "@reduxjs/toolkit";
import {mainApiSlice} from "./features/apiMain";
import mainSlice from "./features/Main/mainSlice";

export const store = configureStore({
    reducer: {
        main: mainSlice,  
        [mainApiSlice.reducerPath]: mainApiSlice.reducer 
        },
        middleware: (premiddlewares)=> premiddlewares().concat(mainApiSlice.middleware)
        
});

