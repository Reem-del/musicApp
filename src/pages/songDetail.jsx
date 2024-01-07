import React, { useEffect } from 'react'
import { Source } from '../source'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function SongDetail() {
    const {id,artistId}=useParams();
    const[result,setResult]=useState({});
    const[result2,setResult2]=useState([]);
   
    
    const compurl='songs/get_details';
    const params={id:id}
    const compurl2='artist/get-details';
    const params2={id:artistId}
  
    useEffect(()=>{
        Source(compurl,params)
        .then((data) => setResult(data))
        .catch((err)=>console.log(err))
    },[id])
    useEffect(()=>{
        Source(compurl2,params2)
        .then((data) => setResult2(data.data))
        .catch((err)=>console.log(err))
    },[artistId])
    console.log(result2)
    console.log(result2)
 
    return (
        <div className='w-full h-1/4 mt-4 p-4' >
             <p className='text-white font-semibold text-xl'>{result?.alias} </p>
             <p className='text-white font-semibold text-xl mb-5'>{result?.subtitle} </p>
         <img src={result?.images?.coverart} alt={result?.alias} className='w-full' />
         {result2.map((res,key)=><p key={res.id}>{res.name}</p>)}
         
      
        
           
            
        </div>
    )
}

export default SongDetail
