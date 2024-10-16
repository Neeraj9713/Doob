import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        count: 0
    },
    reducers:{
        increment : (state)=>{
            state.count +=1;
        }
    }
})

export const {increment} = mainSlice.actions;

export default mainSlice;