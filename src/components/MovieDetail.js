

function MovieDetail({title, backImg})
{
    return(
    <div>
        <h1>{title}</h1>
        <img alt="" src={backImg}></img>
    </div>
    )
}

export default MovieDetail;