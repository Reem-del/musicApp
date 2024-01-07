import { configureStore } from "@reduxjs/toolkit";
import playreducer from "./playreducer";
import favreducer from './favreducer';
import loadReducer from './loadingreducer' 

export const store=configureStore({reducer:{
musicPlayer:playreducer,
favourite:favreducer,
Load:loadReducer,
},
})