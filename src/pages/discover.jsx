import React, { useState } from 'react'
import { useEffect } from 'react';
import {Source} from '../source';
import SongCard from '../component/songcard';
import '../App.css';
import countreycode from '../countrey.json';

      
      export default function Discover() {
        const[countrey,setCountrey]=useState('US'); 
        const[result,setResult]=useState([]);
         const compurl='charts/get-top-songs-in_country_by_genre'; 
        const params= { 
          country_code:countrey,
        genre: 'POP',
        limit: '20'
      }
       
       
      
         
        function handleselect(e){
          setCountrey(e.target.value);
        }
        useEffect(() => {
          Source(compurl,params)
            .then((data) => setResult(data?.data))
            .catch((err) => console.log(err));
        },[countrey]);
        
       
      
      
      
          return (
              <div className='bg-transparent red-500 w-full mt-4 ' >
              <div className='flex flex-row justify-between px-3'>
              <h3 className='text-white'>TopChart in {countrey}</h3>
              <select onChange={handleselect}  className='text-sm'>
              {countreycode.map((con)=><option value={con.value}  className='text-sm'>{con.value}</option>)}
              </select>
             
              </div>
              <div className='flex flex-row flex-wrap mt-5 mx-3 gap-5 overflow-y-hidden hide-scrollbar'>
              {result?.map((track,i)=><SongCard song={track} key={i} collection={result} i={i} />)}
              </div>
               
              </div>
          )
      }
      
        
   

