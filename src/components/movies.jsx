import { useEffect, useState } from 'react';
import '../styles/movies.css'
import MoviesLogic from './moviesLogic';

const Movies = () => {
  
    let [favsData,setData]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:4017/favourites')
            let data= await response.json()
            setData(data)
        }
        fetchData()
    },[])
    let remove=(id,title)=>
    {
        setData(favsData.filter((x)=>x.id!==id))
        alert(`${title} has been removed from favorites`)
    }
    
    return ( 
        <div className="movies">
            {/* <h1>Favorites of All Time</h1>
            <div className="favs">
              
            </div> */}
            <MoviesLogic title="Favorites of All Time" data={favsData} fn={remove}/>
            <MoviesLogic title="Top rated" data={favsData.filter(x=>x.rating>4.7)} fn={remove}/>
            <MoviesLogic title="Top English Movies" data={favsData.filter(x=>x.language=='English')} fn={remove}/>
        </div>
     );
}
 
export default Movies;