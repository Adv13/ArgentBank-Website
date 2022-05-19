import Header from "../../Components/header/header";
import Welcome from "../../components/welcome/welcome"
import Account from "../../components/account/account";
import Footer from "../../Components/footer/footer";

function User() {
    return(
        <div className="userPage">
            <Header />
            <Welcome />
            <Account />
            <Footer />
        </div>

        )
}

export default User;