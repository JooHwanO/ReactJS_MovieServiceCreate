import styles from "../css/Home.module.css" 
function Loading()
{
    return(
        <div className={styles.loading_div}> 
                <h1 className={styles.loading}>Loading...</h1> 
            </div>
    )
}

export default Loading;