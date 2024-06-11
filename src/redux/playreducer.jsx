import { createSlice } from "@reduxjs/toolkit";

 export const playerSlice=createSlice({
    name:'musicPlayer',
    initialState:{
    activeSong:{},
    isPlaying:false,
    isActive:false,
    collection:[],
    currentIndex:0,
    relatedId:'267429991',
    },
    reducers:{
        setactiveSong(state,action){
            state.activeSong=action.payload.song;
            state.collection=action.payload.collection;
            state.currentIndex=action.payload.i;
            state.relatedId=action.payload.song.id
            state.isPlaying=true;
            state.isActive=true;


        },
        nextSong(state,action){
            state.activeSong=state.collection[action.payload];
            state.currentIndex=action.payload;
            state.isActive=true;
        },
        prevSong(state,action){
            state.activeSong=state.collection[action.payload];
            state.currentIndex=action.payload;
            state.isActive=true;
    },
    playpause(state,action){
        state.isPlaying=action.payload;
    },
    
    removeActiveSong(state){
        state.activeSong='';
        state.isActive=false;
    }
}});
export const {setactiveSong,nextSong,prevSong,playpause,removeActiveSong}=playerSlice.actions;
export default playerSlice.reducer;