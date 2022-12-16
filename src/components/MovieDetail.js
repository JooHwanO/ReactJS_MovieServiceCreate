

import styles from "../css/Movie.module.css";
function MovieDetail({ title, backImg, desFull}) {
    return (
        <div>
            <div className={styles.main_div}>
                <img className={styles.backImg} src={backImg} alt=""></img>
                <h1>{title}</h1>
                <h2>{desFull}</h2>
            </div>

        </div>
    )
}

export default MovieDetail;