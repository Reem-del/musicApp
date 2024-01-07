import React, { useEffect, useRef } from 'react';


function Player({isPlaying,volume,seekTime,onEnded,repeat,onLoadedData,onTimeUpdate,activeSong}) {
    const songref=useRef(null);
    if(songref.current){
    if (isPlaying){
        songref.current.play()
    }
  else {songref.current.pause()}
}
    useEffect(()=>{
        songref.current.volume=volume }
    ,[volume])
    useEffect(()=>{
        songref.current.currentTime=seekTime}
    ,[seekTime])
  

    
    return (
      
        <audio
        src={activeSong?.hub?.actions[1]?.uri}
        ref={songref}
        loop={repeat}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
        
        />
    )
     
}

export default Player
