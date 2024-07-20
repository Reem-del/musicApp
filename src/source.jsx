import axios from 'axios';


export const Source=async(compurl,paramter) => {
 
  try{
   const {data} =await axios.get(`https://shazam-api7.p.rapidapi.com/${compurl}`,{
       params:paramter
      ,
        headers: {
          'X-RapidAPI-Key':'2415a61d62msh11d7f9a676b9673p13d940jsn54cd15aa08e7',
          'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
         
        }
      })
      return data;
      }
      catch(err){console.error(err)}
    
    
     
      
     };

       
      
 

