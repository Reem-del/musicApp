import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Source } from '../source';
import Searchsongcard from '../component/searchsongcard';


export default function Search() {
  const {searchval}=useParams();
   const compurl='search';
   const param={term:searchval,
   limit: '5'}

   
   const [res,setRes]=useState([]);
    useEffect(()=>{
      Source(compurl,param)
      .then((data) => setRes(data.data.tracks.hits))
      .catch((err) => console.log(err));
  },[searchval]);
  console.log(res)
    
    return (
        <div className='flex flex-row flex-wrap mt-5 mx-3 gap-5 overflow-y-auto'>
          {res.map((track,i)=><Searchsongcard song={track} collection={res} i={i}/> )}
        </div>
    )
}

