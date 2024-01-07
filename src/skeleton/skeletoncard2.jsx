import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
export default function Skeletoncard2() {
    return (
        <div className='flex flex-row m-4 space-x-3'>
              <Skeleton  width={70} height={70} /> 
              <div className='p-3'>
              <Skeleton width={70}  />
              </div>
        </div>
    )
}
