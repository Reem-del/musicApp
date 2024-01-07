import axios from 'axios';


export const Source=async(compurl,paramter) => {
 
  try{
   const {data} =await axios.get(`https://shazam-api7.p.rapidapi.com/${compurl}`,{
       params:paramter
      ,
        headers: {
          'X-RapidAPI-Key':import.meta.env.VITE_KEY,
          'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
         
        }
      })
      return data;
      }
      catch(err){console.error(err)}
    
    
     
      
     };

       
      
 

