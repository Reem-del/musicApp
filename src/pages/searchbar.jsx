import React, { useState } from 'react'
import {HiSearch } from "react-icons/hi"
import { useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Skeleton from 'react-loading-skeleton'

export default function Searchbar() {
    const loading=useSelector(state=>state.Load.loading)
    const[searchval,setSearchval]=useState('');
    const navigate=useNavigate();
    function handlesubmit(e){
        e.preventDefault();
        searchval.toLocaleLowerCase();
        navigate(`/search/${searchval}`)
        setSearchval('');

    }
    return (
        <div className='h-8 pl-3 '>
        {! loading ? <Skeleton width={150} height={30}/> :
            <form onSubmit={handlesubmit} className='flex  bg-transparent  '>
            <HiSearch className='h-8 w-6 text-[#413b58]' /> <input className='pl-3 bg-transparent text-white caret-blue-800' value={searchval} onChange={(e)=>setSearchval(e.target.value)} placeholder='serach song...' autoComplete='off'/>
    
           </form>}
       </div>            
            
    )
}
