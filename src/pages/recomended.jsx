import React, { useEffect, useState } from 'react'
import { Source } from '../source'
import { useSelector } from 'react-redux';
import '../App.css';
import Relatedsongcard from '../component/relatedsongcard';
import Skeleton from 'react-loading-skeleton'

function Recomended() {
  const loading=useSelector(state=>state.Load.loading)
  const {relatedId}=useSelector(state=>state.musicPlayer)
  
    const compurl='songs/list-recommendations';
     const params={
        id:relatedId,
        limit: '9'
      }
      
    const[res,setRes]=useState([]);
   
    
    useEffect(() => {
        Source(compurl,params)
          .then((data) => setRes(data?.tracks))
          .catch((err) => console.log(err));
      },[relatedId]);
      
  
    return (
        <div className='flex flex-col hide '>
          <p className='text-lg text-yellow-200 mb-3 '>{loading ? `Related Songs` : <Skeleton width={80} height={20}/>} </p>
          {res?.map((track,i)=><Relatedsongcard key={i} song={track} collection={res} i={i} />)}  
        </div>
    )
}

export default Recomended;
