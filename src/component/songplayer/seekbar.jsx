import React from 'react'

function Seekbar({value,min,max,onInput,className}) {
    function getTime(t){
       
         return Number(t) !==0 ? `0${Math.floor(t/60)}:${Math.floor(t % 60)}` : '00:00';
        
    }
    return (
        <div className='flex flex-row'>
        <p className='px-2'>{ getTime(value)}</p>
        <input 
        type='range' 
        step='any'
        min={min}
        max={max}
        value={value}
        onInput={onInput}
        className={className}
       
/>
      <p className='px-2'>{getTime(max)}</p>
        </div>
    )
}

export default Seekbar
