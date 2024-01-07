import React from 'react'
import {BsArrowRepeat,BsPlayCircleFill,BsPauseCircleFill} from "react-icons/bs";
import {BiSkipNextCircle,BiSkipPreviousCircle,BiShuffle} from "react-icons/bi";

function Control({isPLay,playpause,setRepeate,nextSong,prevSong,setShuffle,shuffle,repeat}) {
    return (
        <div className='flex flex-row justify-around mt-2 text-[#9797df]'>
       <BsArrowRepeat color={repeat ? 'red ' : undefined}  onClick={setRepeate} size={25} />
       <BiSkipPreviousCircle  size={25} onClick={prevSong} />
       {isPLay ? <BsPauseCircleFill size={30}  onClick={playpause}/> : <BsPlayCircleFill   size={30}  onClick={playpause}/>}
       <BiSkipNextCircle  size={25} onClick={nextSong} />
       <BiShuffle  color={shuffle ?'red ' : undefined} size={25} onClick={setShuffle} />
        </div>
    )
}

export default Control
