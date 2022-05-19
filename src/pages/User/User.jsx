import Header from "../../components/header/header";
import Welcome from "../../components/welcome/welcome"
import Account from "../../components/account/account";
import Footer from "../../components/footer/footer";

function User() {
    return(
        <div className="userPage">
            <Welcome />
            <Account />
        </div>

        )
}

export default User;