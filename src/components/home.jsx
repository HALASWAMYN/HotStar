import '../styles/home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <div className="description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus iusto id ea vel nisi, ratione, maxime enim vero nemo laudantium cupiditate distinctio repudiandae officia animi qui quae delectus libero suscipit?</p>
                    <button>Subscribe Now</button>

                </div>
                <div className="banner_image">
                    <img width="900" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-12-13/mcf_desk-75015308-7b3d-4d98-a35e-579892effc73.jpg" alt="" />
                </div>
            </div>
            <div className="movies_list">
                    <h1>Recommended for you</h1>
                    <img src="images/img1.webp" alt="" />
                    <img src="images/img2.webp" alt="" />
                    <img src="images/img3.webp" alt="" />
                    <img src="images/img4.webp" alt="" />
                    <img src="images/img5.webp" alt="" />
                </div>
        </div>
    );
}

export default Home;