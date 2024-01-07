import { createSlice } from "@reduxjs/toolkit";

const loadSlice=createSlice({
    name:'Load',
    initialState:{
        loading:false,
        open:false
    },
    reducers:{
        onReady(state){
            state.loading=true;
        },
        setOpen(state,action){
            state.open=action.payload;
        }


    }
})
export const {onReady,setOpen}=loadSlice.actions;
export default loadSlice.reducer;