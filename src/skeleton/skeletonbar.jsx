import React from 'react'
import Skeleton from 'react-loading-skeleton';

export default function Skeletonbar({num}) {
    return (
        <div>
            {Array(num).fill(0).map((e,key)=>
            <div key={key} className='flex flex-row items-center gap-2 mb-4 ml-5 '>
            <Skeleton width={20} height={20} />
            <Skeleton width={70} height={20} />
            </div>
)}
        </div>
    )
}
