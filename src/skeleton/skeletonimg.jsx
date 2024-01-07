import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Skeletonimg({num}) {
    
    return (
        <div className='flex flex-row  gap-4 h-48 mt-6'>
          {Array(num).fill(0).map((ele,key)=>
          <Skeleton key={key} width={100} height={100} circle />
          )}  
        </div>
    )
}
