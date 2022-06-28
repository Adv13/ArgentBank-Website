import logo from "../../assets/argentBankLogo.png"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken, resetProfile, saveProfile } from "../../store";
import { getProfile } from "../../API/api";

/**
* This function create the header component and manage the infos shown based on the user's info recovered from the database.
*/
function Header() {

    const token = useSelector((state) => state.token);
    const userDatas = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        async function getUserDatas() {
            const response = await getProfile();
            dispatch(saveProfile(response));
        }
        if (token){
            getUserDatas();
            setIsLogged(true);
        }
    }, [dispatch, token]);

    /**
    * This function delete the token received when a user is connected in order to disconnect him.
    */
    function signOut(){
        dispatch(deleteToken());
        dispatch(resetProfile());
        setIsLogged(false);
    }

    return(
        <header>
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              alt="Argent Bank Logo"
              src={logo}
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          {isLogged ? (
            <div className="nav-right">
              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                {userDatas.firstName}
              </Link>
              <Link className="main-nav-item" to="/" onClick={signOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </div>
          ) : (
            <div className="nav-right">
              <Link className="main-nav-item" to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            </div>
          )}
        </nav>
      </header>
    );
}

export default Header;
