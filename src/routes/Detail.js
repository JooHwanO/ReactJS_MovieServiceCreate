import { useState,useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail()
{
    const [Item, setItem] = useState();
    const {id} = useParams();
    console.log(id);
    const getMovie = useCallback(async()=>{
        const json= await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id= ${id}`)).json();
        console.log(json);
        setItem(json);
    });

    useEffect(()=>{
        getMovie();
        //워링무시
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]); 
    
    return(<h1>{Item.data.movie.title}</h1>);
}
export default Detail;