import { useEffect, useState } from "react";

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const  getMovies = async()=>{
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"); // await을 사용하므로 동기식. 
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    } 


    useEffect(()=>{
        getMovies();
    },[]) //한 번 만 받기


    console.log(movies);
    return (
        <div> {loading ? <h1> Loading...</h1> : <div> {movies.map(movie =>
            <div key={movie.id}>
            <img src={movie.medium_cover_image}></img>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
                {movie.gener==null ? (""):movie.genres.map((gener)=> <li key={gener}>{gener}</li>)}
                
            </ul>
            </div>)}</div> } </div>
    )


}
export default Movie;