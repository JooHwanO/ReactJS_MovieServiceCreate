import { useState,useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";
// import styles from "../css/Movie.module.css"
function Detail()
{

    const [Item, setItem] = useState([]); //초기화 중요
    const [loading,setLogding]= useState(true);
    const {id} = useParams();
    
    
    
    const getMovie = useCallback(async ()=>{
        const response= await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json();
        setItem(json.data.movie);
        setLogding(false)
        // console.log(json);
        console.log(typeof(json.data.movie));
        console.log(json.data.movie);
    },[id]);

    useEffect(()=>{
         // eslint-disable-next-line react-hooks/exhaustive-deps
        getMovie();
    },[getMovie]); 
    
    
    return(
        <div>
            {loading ? <Loading/> : <div> {(<MovieDetail title={Item.title} backImg={Item.background_image} desFull= {Item.description_full} mainimg={Item.large_cover_image} Url={Item.url} rating={Item.rating} runtime={Item.runtime} date_upload={Item.date_uploaded}/>)}</div> }
        </div>);
}

export default Detail;