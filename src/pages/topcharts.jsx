import React, { useEffect, useState } from 'react'
import {Source} from '../source';
import Genere from '../gener.json';
import SongCard from '../component/songcard';
import Skeleton from 'react-loading-skeleton';
import {useSelector} from 'react-redux'
import '../App.css'


export default function TopChart() {
  const loading=useSelector(state=>state.Load.loading)
  const relatedId=useSelector(state=>state.musicPlayer.relatedId)
  const[genre,setGenre]=useState('POP'); 
  const[result,setResult]=useState([]);

  const compurl='charts/get-top-songs-in_world_by_genre'; 
  const params={ 
  genre: genre,
  limit: '20'
}

  function handleselect(e){
    setGenre(e.target.value);
  }

  useEffect(() => {
    Source(compurl,params)
      .then((data) =>setResult(data.data))
      .catch((err) =>console.log(err));
  },[genre]);
  console.log(result)

 console.log('relatedId',relatedId)
  

    return (
        <div className='bg-transparent w-full mt-4 h-full' >
        <div className='flex flex-row justify-between px-3'>
        <h3 className='text-white'>{loading ? `TopChart` : <Skeleton width={70} />}</h3>
        {!loading ? <Skeleton width={90} height={25}/> :
        <select  onChange={handleselect}  className='text-sm'>
        {Genere.map((gen,key)=><option key={key} value={gen.value}  className='text-sm'>{gen.value}</option>)}
        </select>}
       
        </div>
        <div className='flex flex-row flex-wrap mt-5 mx-3 gap-5  show'>
        {result?.map((track,i)=><SongCard  key={track.id} song={track} collection={result} i={i}  />)}
        </div>
         
        </div>
    )
}
