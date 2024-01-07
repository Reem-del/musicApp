
import { useDispatch, useSelector } from 'react-redux'
import Seekbar from './seekbar';
import Player from './player';
import Control from './control';
import { useEffect, useState } from 'react';
import { playpause,nextSong,prevSong,removeActiveSong } from '../../redux/playreducer';
import Volume from './volume';
import {IoMdClose} from 'react-icons/io'

export default function SongPlayer() {
    const dispatch=useDispatch();
    const {activeSong,isPlaying,currentIndex,collection,isActive}=useSelector(state=>state.musicPlayer);

    /* variables */
    const [repeat,setRepeate]=useState(false)
    const [shuffle,setShuffle]=useState(false)
    const [volume,setVolume]=useState(0.4)
    const [seekTime,setSeekTime]=useState(0)
    const [appTime,setAppTime]=useState(0)
    const [duration,setDuration]=useState(0)
    
    useEffect(()=>{if(collection.length){dispatch(playpause(true))}},[currentIndex])


    function handleplaypause(){
        if(!isActive) return 
    if ( isPlaying){dispatch(playpause(false))}
    else {dispatch(playpause(true))}
    }
   function handleNext(){
  
    if (currentIndex === collection.length-1){
        dispatch(nextSong(0)) }
        else if (shuffle){
            dispatch(nextSong(Math.floor(Math.random()* collection.length)))
        }
        else { dispatch(nextSong(currentIndex + 1)) }

   }
   function handlePrev(){
    if (currentIndex === 0 ){
        dispatch(prevSong(collection.length-1)) }
        else if (shuffle){
            dispatch(prevSong(Math.floor(Math.random()  * collection.length)))
        }
        else { dispatch(prevSong(currentIndex - 1)) }

   }
  
    return (
        <div className='relative flex flex-row  gap-2 h-full rounded-sm'>
             <IoMdClose  className='absolute top-3 right-3 text-yellow-200 ' onClick={()=>dispatch(removeActiveSong())}/>
            <img src={`${activeSong?.images.coverart ? activeSong.images.coverart : activeSong.images.default}`} alt='img1'/> 
            <div className='relative flex flex-col w-3/4'>
            <p className='py-2 font-serif text-lg  text-yellow-200'>{activeSong.title}</p>
           
            <Seekbar 
            value={appTime} 
            min='0'
            max={duration}
            onInput={(e)=>setSeekTime(e.target.value)} />
          
            <Control 
            isPLay={isPlaying}
            repeat={repeat}
            setRepeate={()=>setRepeate(!repeat)}
            shuffle={shuffle}
            setShuffle={()=>setShuffle(!shuffle)}
            playpause={handleplaypause}
            nextSong={handleNext}
            prevSong={handlePrev}
            />
           
            
            <Player
            isPlaying={isPlaying}
            activeSong={activeSong}
            volume={volume}
            seekTime={seekTime}
            repeat={repeat}
            onEnded={handleNext}
            onLoadedData={(e)=>setDuration(e.target.duration)}
            onTimeUpdate={(e)=>setAppTime(e.target.currentTime)}
            />
            </div>
                
          <div className='absolute top-[68%] -right-1 hide'>
          <Volume
            value={volume} 
            min='0'
            max='1'
            onChange={(e)=>setVolume(e.target.value)}
            />
            </div>
          
            
            </div>
            
        
    )
}

