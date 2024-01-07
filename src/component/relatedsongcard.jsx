import React from 'react'
import Skeleton from 'react-loading-skeleton';
import {useSelector,useDispatch} from 'react-redux'
import { setactiveSong } from '../redux/playreducer';


function Relatedsongcard({song,collection,i}) {
    const loading=useSelector(state=>state.Load.loading)
    const {isPlaying,activeSong}=useSelector(state=>state.musicPlayer)
    const dispatch=useDispatch();
    function handleSelect(){
        dispatch(setactiveSong({song,collection,i}))
    }
  
    return (

        <div className='sm:flex flex-row m-3 text-yellow-200 max-xs:flex-col gap-2'>
            <div className='relative'>
            {loading ?  <img src={song?.images?.coverart}  alt={song.title}  className='w-16 h-full'  onClick={handleSelect}  /> :   <Skeleton  width={70} height={70}/> }
      <img src='/images/output-onlinegiftools.gif' alt={song?.title} className={`${isPlaying && activeSong?.title === song.title ? `absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]` : `hidden`}`} />
      </div>
          <h3 className='ms:p-3 truncate xs:text-start' >{loading ? song.title :  <Skeleton width={70}  />} </h3>
  </div>
        
    )
}

export default Relatedsongcard
