

import styles from "../css/Movie.module.css";
function MovieDetail({ title, backImg, desFull, mainimg,Url,rating,runtime,date_upload}) {



    return (
        <div className={styles.main_div}>
            <img className={styles.backImg} src={backImg} alt="" onError={(e)=>{
                e.target.src=mainimg 
            }}></img>
            <div className={styles.detail_div}>
                <div className={styles.detail_content_img}>
                    <img src={mainimg} alt=""></img>
                </div>
                <div className={styles.detail_content_info}>
                    <a href={Url} target="_blank" rel="noreferrer"><h1>{title}</h1></a>
                    <span>{desFull}</span>
                    <div><h2>⭐ Rating :  {rating}</h2> </div>
                    <div><h2>⏱ Runtime :  {runtime >60 ? Math.floor(runtime/60)+" h "+runtime%60: runtime} min</h2></div>
                </div>

            </div>
            
        </div>
    )
}

export default MovieDetail;