import './App.css';
import {Routes,Route} from 'react-router-dom';
import Sidebar from './pages/sidebar';
import Searchbar from './pages/searchbar';
import Search from './pages/search';
import Discover from './pages/discover';
import Favourit from './pages/favourit';
import Topchart from './pages/topcharts';
import SongDetail from './pages/songDetail';
import Recomended from './pages/recomended';
import TopArtist from './pages/TopArtist';
import SongPlayer from './component/songplayer/songplayer.jsx';
import {useSelector } from 'react-redux';
import {IoMdClose} from 'react-icons/io'
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { onReady,setOpen } from './redux/loadingreducer';



function App() {
  const {isActive}=useSelector(state=>state.musicPlayer);
  const open=useSelector(state=>state.Load.open)
  const dispatch=useDispatch();


useEffect(()=>{setTimeout(() => {
  dispatch(onReady())
},3000)},[])

  return (
    <div className='flex relative h[100vh]'>
    <div className={`w-[250px] bg-[#191624] text-white  ${open ? `sidemenu transmenu` : `hide`}`}>
    <IoMdClose className='absolute top-2 right-2 w-14 hiding' onClick={()=>dispatch(setOpen(false))} />
    <Sidebar />
    </div>
    <div className='w-[900px]  bg-gradient-to-r from-black to-[#121286] '>
      <div className='hiding '>
        <img src='images/music-removebg-preview.png' onClick={()=>dispatch(setOpen(true))} alt='log' className='w-32 h-32 '/>
      </div>

    <Searchbar  />

    <div className='h-[calc-(100vh - 8px)] relative'>
    <Routes>
    <Route exact path='/' element={<Topchart />} />
    <Route exact path='discover' element={<Discover />} />
    <Route  path='search/:searchval' element={<Search />} />
    <Route  path='songDetail/:id/:artistId' element={<SongDetail />} />
    <Route exact path='favourit' element={<Favourit />} />
    </Routes>
    </div>
    {isActive && 
    <div className='absolute trans w-[600px] bottom-0 min-sm:h-28 z-10 bg-[#191624] max-sm:w-full h-fit'>
     <SongPlayer />

    </div>}
   
    </div>
    
    <div className='flex flex-col w-[300px] bg-[#121286] '>
     <div className='mt-12 overflow-y-scroll scrolly'><Recomended /></div>
     <div className=' mt-8'><TopArtist /></div>
    
    </div>
    
   
    </div>
          
  );
}

export default App;
