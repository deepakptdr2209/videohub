import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {},
    reducers : {
        catchResult : (state,action)=>{
            state = Object.assign(state , action.payload);
        },
    }
})

export const {catchResult} = searchSlice.actions;
export default searchSlice.reducer;