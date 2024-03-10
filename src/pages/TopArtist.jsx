import '../App.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import Skeletonimg from '../skeleton/skeletonimg';
import {useSelector} from 'react-redux'

export default function TopArtist() {
    const loading=useSelector(state=>state.Load.loading)
    const newLocal = [{ id: 1, src: 'artist/R.jpg' }, { id: 2, src: 'artist/OIP.jpg' }, { id: 3, src: 'artist/OIP (2).jpg' }, { id: 4, src: 'artist/OIP (1).jpg' }];
    const arr=newLocal
    
    
    return (
        <div >
        <h3 className='text-xl text-yellow-200 sticky '>{loading ? `Top Artists` : <Skeleton />} </h3>
        <div className='sm:flex flex-row  gap-4 h-48 mt-6 xs:flex-col overflow-x-scroll scrolly '>
            {loading ? 
       arr.map(ele=><img key={ele.id} src={ele.src} alt='img3' className='rounded-full w-24 h-24' />): <Skeletonimg num={arr.length}  />}
        
        </div>
        </div>
    )
}
