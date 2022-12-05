
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title}></img>
            <h2>
                <Link to="/movie">
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
    coverImg: Proptypes.string.isRequired,
    title:Proptypes.string.isRequired,
    summary:Proptypes.string.isRequired,
    genres:Proptypes.arrayOf(Proptypes.string).isRequired
}
export default Movie;