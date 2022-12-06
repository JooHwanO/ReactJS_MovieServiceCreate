
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title}></img>
            <h2>
                <Link to={`/movie/${id}`}>
                    {title}
                </Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres == null ? ("") : genres.map((genres) => <li key={genres}>{genres}</li>)}

            </ul>
        </div>
    )

}

Movie.propTypes={
    id:Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title:Proptypes.string.isRequired,
    summary:Proptypes.string.isRequired,
    genres:Proptypes.arrayOf(Proptypes.string).isRequired
}
export default Movie;