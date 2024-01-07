import React from 'react'
import SongCard from '../component/songcard'
import { useSelector } from 'react-redux';


function Favourit() {

    const favPlaylist=useSelector(state=>state.favourite.favPlaylist);
    return (

        <div className='flex flex-row flex-wrap mt-5 mx-3 gap-5 overflow-y-auto'>
          {favPlaylist.map((track,i)=><SongCard key={i} song={track} collection={favPlaylist} i={i}  />)}  
        </div>
    )
}

export default Favourit
