import { NavLink } from 'react-router-dom';
import {HiHashtag,HiOutlineHome, HiSearch,HiHeart} from "react-icons/hi"
import Skeleton from 'react-loading-skeleton'
import {useDispatch, useSelector} from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeletonbar from '../skeleton/skeletonbar';
import { setOpen } from '../redux/loadingreducer';



export default function Sidebar() {
    const dispatch=useDispatch()
    const loading=useSelector(state=>state.Load.loading);
    const linkarr=[{title:'TopChart',to:'./',icon:HiOutlineHome},
    {title:'Discover',to:'./discover',icon:HiHashtag},
    {title:'your playist',to:'./favourit',icon:HiHeart},
    {title:'Search',to:'./search',icon:HiSearch},
    ]
    


    return (
        <div className='mt-2 h-screen relative'>
        <div className='ml-2'>
        {loading ? <img  src='images/music-removebg-preview.png' alt='logo' className='w-32 h-32 hide' /> :<Skeleton  width={100} height={100} circle />}
        </div>
        <div className='mt-10 '>
        {loading ?
        linkarr.map((item)=>
            <NavLink key={item.title} to={item.to} className='flex flex-row items-center  text-sm mb-4 ml-5 sm:ml-2 hover:text-cyan-400' onClick={()=>dispatch(setOpen(false))}><item.icon className='w-8 ' />{item.title}</NavLink>)
           : <Skeletonbar num={4} />}
           
        
        </div>

       
        </div>
        
       
        
    )
}
