import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                🌾 <span>AgriTrace</span>
            </div>

            <div className="navbar-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/farmer">
                    Farmer
                </Link>

                <Link to="/collection">
                    Collection
                </Link>
                <Link to="/consumer">
                    Consumer
                </Link>
                <Link to="/transport">Transport</Link>

                <Link to="/about">
                    About
                </Link>


            </div>

            <div className="navbar-right">

                <button className="login-button">
                    Login
                </button>

                <div className="admin">
                    👤 Admin
                </div>

            </div>

        </nav>
    );
}

export default Navbar;