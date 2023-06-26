const MoviesLogic = (props) => {
    let title = props.title
    let favouritesData = props.data
    let handlRemove = props.fn

    return (
        <div className="favs">
            <h1>{title}</h1>
            {
                favouritesData.map((data) => (

                    <div className="favs_list">

                        <h2> Tittle: {data.title}</h2>
                        <p> genere/langauge: {data.genre}/{data.language}</p>
                        <p>  rating: {data.rating}</p>
                        <button onClick={() => handlRemove(data.Id, data.title)} >Remove</button>
                        {/* <button onClick={()=>topRating(data.Id,data.title)}>click</button> */}
                    </div>

                ))
            }
        </div>
    );
}

export default MoviesLogic;