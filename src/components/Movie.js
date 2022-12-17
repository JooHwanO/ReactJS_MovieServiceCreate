
import Proptypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "../css/Movie.module.css"

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div className={styles.content}>
            <div className={styles.coverimg}>
                <img src={coverImg} alt={title}></img>
            </div>
            <div className={styles.m_content}>
                <span>
                    <Link to={`/movie/${id}`}>
                        {title}
                    </Link>
                </span>
                
                <p>{summary.length >398 ? `${summary.slice(0,398)}...`: summary.length <= 0 ?<span>No-Contents</span>:summary}</p>
                <h3>🎬 Category</h3>
                <ul>
                    {genres == null ? ("") : genres.map((genres) => <li key={genres}>▷ {genres}</li>)}
                </ul>
            </div>
        </div>
    )

}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
}
export default Movie;