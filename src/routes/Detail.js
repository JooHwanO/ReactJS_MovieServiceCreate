import { useState,useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail()
{
    const [Item, setItem] = useState([]); //초기화 중요
    const {id} = useParams();
    const getMovie = useCallback(async ()=>{
        const response= await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json();
        setItem(json.data.movie);
        // console.log(json);
        console.log(typeof(json.data.movie));
    },[id]);

    useEffect(()=>{
         // eslint-disable-next-line react-hooks/exhaustive-deps
        getMovie();
    },[getMovie]); 
    
    return(
        <div>
            { Item.map(item=>(<Detail title={item.title}/>))}

        </div>);
}
export default Detail;