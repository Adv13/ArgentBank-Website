import logo from "../../assets/argentBankLogo.png"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken, saveProfile } from "../../store";
import { getProfile } from "../../API/api";

/**
* This function create the header component and manage the infos shown based on the user's info recovered from the database.
*/
function Header() {

    const token = useSelector((state) => state.token);
    const userDatas = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUserDatas() {
            const response = await getProfile();
            const userDatas = response.data.body;
            dispatch(saveProfile(userDatas));
        }
        if (token){
            getUserDatas();
        }
    }, [dispatch, token]);

    /**
    * This function delete the token received when a user is connected in order to disconnect him.
    */
    function signOut(){
        dispatch(deleteToken());
    }

    return(
        <header className="header d-flex flex-row justify-content-between ms-4 me-4 p-2">
            <Link className="homeLink logo" to="/">
                <img src={logo} alt="Logo ArgentBank"></img>
            </Link>
                {token ? (
            <nav className="navbar">
                <Link className="userPageLink" to="/profile">
                    <i className="fa fa-user-circle p-2"></i>
                    <p>{userDatas.firstName}</p>
                </Link>
                <Link className="main-nav-item" to="/" onClick={signOut}>
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
