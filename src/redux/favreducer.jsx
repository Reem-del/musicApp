import { createSlice } from "@reduxjs/toolkit";

export const favSlice=createSlice({
    name:'favourite',
    initialState:{
        favPlaylist:[],
      
       
        
    },
    reducers:{
    
    
    addSong(state,action){
        const exist=state.favPlaylist.find(track => track.key === action.payload.key)
    if (!exist)
    {state.favPlaylist.push(action.payload)}
   
    },
    removeSong(state,action){
        const exist=state.favPlaylist.find(track => track.key === action.payload.key)
        if (exist){
        state.favPlaylist=state.favPlaylist.filter(track=>track.key !== action.payload.key)}
    },

}
    

    

    
})
export const  {addSong,removeSong}=favSlice.actions;
export default favSlice.reducer;
/*
else {
    state.favPlaylist.filter(track => track.key !== action.payload.key)*/
