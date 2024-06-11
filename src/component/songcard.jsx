import { useDispatch, useSelector } from 'react-redux'
import { setactiveSong } from '../redux/playreducer';
import { Link } from 'react-router-dom';
import { HiHeart,HiOutlineHeart} from "react-icons/hi2"
import {addSong, removeSong} from '../redux/favreducer';
import Skeletoncard from '../skeleton/skeletoncard';








export default function SongCard({song,collection,i}) {
const loading=useSelector(state=>state.Load.loading)
const {isPlaying,activeSong}=useSelector(state=>state.musicPlayer)
    const dispatch=useDispatch();
    const {favPlaylist}=useSelector(state=>state.favourite)
 

   function handleSelect(){
    dispatch(setactiveSong({song,collection,i}))
    
   }

 
   const isFav=favPlaylist.find(t=>t.id === song.id)
  

    return (<>
      {!loading ? <Skeletoncard /> : 
        <div className='flex flex-col w-36  text-yellow-200 bg-white/5 bg-opacity-80 text-center' >
        <div className='relative'>
        <img src='R.jpg' alt={song.attributes.name}  className='w-full ' onClick={handleSelect} />
      <img src='/images/output-onlinegiftools.gif' alt='img1' className={`${isPlaying && activeSong.id === song.id ? `absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]` : `hidden`}`} />
      {!isFav ? <HiOutlineHeart className='absolute z-10 right-2 top-2' onClick={()=>dispatch(addSong(song))} /> : <HiHeart className='absolute z-10 right-2 top-2' onClick={()=>dispatch(removeSong(song))} />} 
        </div>
        <p className='pt-3 mb-2 text-sm truncate text-bold'>{song.attributes.name}</p> 
        <p className='pt-3 mb-2 text-sm truncate'>{song.attributes.artistName}</p> 
        
        
        </div>}
        </>
    )
}
/*
 : <HiHeart className='absolute z-10 right-2 top-2'  />}
 /${song?.artists[0]?.adamid}
 //<Link to={`../songDetail/${song?.key}/${song?.artists[0]?.adamid}`}><h3 className='truncate pt-2' >{song.name}</h3> </Link>
 song.attributes.artwork.url
*/
