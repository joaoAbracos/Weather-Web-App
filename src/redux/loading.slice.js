import { createSlice } from "@reduxjs/toolkit";
import { addAsync } from '../redux/city.slice'
export const loadingSlice = createSlice({
    name: "loading",
    initialState: false,
    reducers: {
        toggleLoading: (state) => !state

    },
    extraReducers:{
        [addAsync.pending]:(state)=> true,
        [addAsync.fulfilled]:(state)=> false,
        [addAsync.rejected]:(state)=> false,
    }
})
export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;