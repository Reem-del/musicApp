import React, { useState } from 'react'
import { BsFillVolumeMuteFill, BsVolumeDownFill } from 'react-icons/bs';


export default function Volume({min,max,onChange,value,setVolume}) {
    const[show,setShow]=useState(false)
    return (
        <div className='flex flex-row '>
        
{ value == 0 && <BsFillVolumeMuteFill size={25} onClick={()=>setVolume(0.3)} />}
{ value > 0  &&  value <= 1 && <BsVolumeDownFill  size={25} className='text-slate-300' onClick={()=>setShow(!show)}/>}


          <input 
          type='range'
          step='any'
          value={value}
          min={min}
          max={max}
          onChange={onChange}
      className={`opacity-0 h-1 w-16 mt-3 ${show && `opacity-60`}`}
          />
        </div>
    )
}
