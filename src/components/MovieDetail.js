

import styles from "../css/Movie.module.css";
function MovieDetail({ title, backImg, desFull, mainimg}) {
    return (
        <div className={styles.main_div}>
            <img className={styles.backImg} src={backImg} alt=""></img>
            <div className={styles.detail_div}>
                <h1>{title}</h1>
                <h2>{desFull}</h2>
                <img src={mainimg} alt=""></img>
            </div>
            
        </div>
    )
}

export default MovieDetail;