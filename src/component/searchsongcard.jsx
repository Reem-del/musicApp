import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { setactiveSong } from '../redux/playreducer';

function Searchsongcard({song,collection,i}) {
    
    const artistname=song?.artists.map ((art)=>art.alias)
    const dispatch=useDispatch()
    const {isPlaying,activeSong}=useSelector(state=>state.musicPlayer)

 

    function handleSelect(){
        dispatch(setactiveSong({song,collection,i}))
       }
    return (
        
        <div className='flex flex-col w-32  text-yellow-200 bg-white/5 bg-opacity-80 text-center' >
       <div className='relative'>
        <img src={song?.images.default}  alt={song?.alias}  className='w-full'  onClick={handleSelect}  />
        <img src='/images/output-onlinegiftools.gif' alt={song?.alias} className={`${isPlaying && activeSong?.key === song.key ? `absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]` : `hidden`}`} />
        </div>
        <Link to={`../songDetail/${song?.key}`}><h3 className=' truncate' >{song.alias}</h3> </Link>
        <p className='truncate'>{artistname}</p>
        
        
        </div>
    

      
    )
}

export default Searchsongcard
