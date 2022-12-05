
import Movie from "../components/Movie";
import { useState,useEffect } from "react";

function Home()
{
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"); // await을 사용하므로 동기식. 처리될때까지 기다림.
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }


    useEffect(() => {
        getMovies();
    }, []) //한 번 만 받기


    console.log(movies);
    return (
        <div> {loading ? <h1> Loading...</h1> :
            <div> {movies.map(movie => 
                (<Movie key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>)
                //Movie 호출 
                )}
            </div>}
        </div>
    )

}
export default Home;