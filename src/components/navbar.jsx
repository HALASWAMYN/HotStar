import '../styles/navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src='images/logo1.svg' alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Favorites</Link></li>
                    <li><Link to="/add-favourites">Add To Favorites</Link></li>
                    <li><Link to="">Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;