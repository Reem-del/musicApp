import React from 'react'
import Skeleton from 'react-loading-skeleton'

function Skeletoncard() {
    return (
        <div className='flex flex-col ' >
          <Skeleton  width={150} height={150} /> 
           <Skeleton />
           <Skeleton />
        </div>
    )
}

export default  Skeletoncard
