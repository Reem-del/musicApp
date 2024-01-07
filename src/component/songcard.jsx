import { useDispatch, useSelector } from 'react-redux'
import { setactiveSong ,changeRelatedId} from '../redux/playreducer';
import { Link } from 'react-router-dom';
import { HiHeart,HiOutlineHeart} from "react-icons/hi2"
import {addSong, removeSong} from '../redux/favreducer';
import Skeletoncard from '../skeleton/skeletoncard';








export default function SongCard({song,collection,i}) {
const loading=useSelector(state=>state.Load.loading)
const {isPlaying,activeSong}=useSelector(state=>state.musicPlayer)
    const dispatch=useDispatch();
    const artistname=song.artists.map((artist)=>artist.alias)
    const {favPlaylist}=useSelector(state=>state.favourite)
 

   function handleSelect(){
    dispatch(setactiveSong({song,collection,i}))
    dispatch(changeRelatedId(song))
   }

 
   const isFav=favPlaylist.find(t=>t.key === song.key)
  

    return (<>
      {!loading ? <Skeletoncard /> : 
        <div className='flex flex-col w-36  text-yellow-200 bg-white/5 bg-opacity-80 text-center' >
        <div className='relative'>
        <img src={song?.images?.coverart}  alt={song.title}  className='w-full ' onClick={handleSelect} />
      <img src='/images/output-onlinegiftools.gif' alt='img1' className={`${isPlaying && activeSong?.title === song.title ? `absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]` : `hidden`}`} />
      {!isFav ? <HiOutlineHeart className='absolute z-10 right-2 top-2' onClick={()=>dispatch(addSong(song))} /> : <HiHeart className='absolute z-10 right-2 top-2' onClick={()=>dispatch(removeSong(song))} />} 
        </div>
        <Link to={`../songDetail/${song?.key}/${song?.artists[0]?.adamid}`}><h3 className='truncate pt-2' >{song.title}</h3> </Link>
        <p className='pt-3 mb-2 text-sm truncate'>{artistname}</p> 
        
        
        </div>}
        </>
    )
}
/*
 : <HiHeart className='absolute z-10 right-2 top-2'  />}
 /${song?.artists[0]?.adamid}
*/
