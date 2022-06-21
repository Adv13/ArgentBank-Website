import logo from "../../assets/argentBankLogo.png"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken, saveProfile } from "../../store";
import { getProfile } from "../../API/api";

function Header() {

    const [isLogged, setIsLogged] = useState(false);
    const userName = "Tony";

    return(
        <header className="header d-flex flex-row justify-content-between ms-4 me-4 p-2">
            <Link className="homeLink logo" to="/">
                <img src={logo} alt="Logo ArgentBank"></img>
            </Link>
                {isLogged ? (
            <nav className="navbar">
                <Link className="userPageLink" to="/user">
                    <i className="fa fa-user-circle p-2"></i>
                    <p>{userName}</p>
                </Link>
                <Link className="main-nav-item" to="/">
                    <i className="fa fa-sign-out p-2"></i>
                    Sign Out
                </Link>
            </nav>
            ) : (
            <nav className="navbar">
            <Link className="main-nav-item" to="/login">
                <i className="fa fa-user-circle p-2"></i>
                Sign In
            </Link>
            </nav>
        )}

        </header>)
}

export default Header;
