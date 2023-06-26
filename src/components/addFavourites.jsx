import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addFavourites.css'

const AddFavourites = () => {
    let [title, setTitle] = useState("")
    let [genre, setGenre] = useState("")
    let [language, setLanguage] = useState("")
    let [rating, setRating] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = {title,genre,language,rating }
        fetch('http://localhost:4017/favourites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert("data added sucessfully")
        navigate("/movies")
    }
    let reset =()=>{
        setTitle("")
        setGenre("")
        setLanguage("")
        setRating("")
    }
    return (
        <div className="addFavourites">
            <h1 style={{ textAlign: "center" }}>Add To Favourites</h1>
            <div className="form">
                <div className="form_image">
                    <img height={535} width={350} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seekpng.com%2Fpng%2Fdetail%2F293-2936624_clip-art-kid-watching-movies-cartoon.png&f=1&nofb=1&ipt=f20ed6a137910a9657fc2fa8b2dec668ad1115f294b71a84fb5ad5ba4440666d&ipo=images" alt="" />
                </div>
                <div className="form_inputs">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="title">
                            <input type="text" placeholder="enter title"
                            value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="genre">
                            <input type="text" placeholder="enter genre of the movie" 
                            value={genre} onChange={(e) => setGenre(e.target.value)} />
                        </div>
                        <div className="language">
                            <input type="text" placeholder="enter language" 
                            value={language} onChange={(e) => setLanguage(e.target.value)} />
                        </div>
                        <div className="rating">
                            <input type="number" placeholder="enter rating" 
                            value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <button type='submit'>Add to Favourites</button>
                        <button type='reset' onClick={reset}>Reset</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFavourites;