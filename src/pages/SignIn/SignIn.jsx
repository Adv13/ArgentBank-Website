import Header from "../../Components/header/header";
import Auth from "../../components/authentification/authentification";
import Footer from "../../Components/footer/footer";

function SignIn() {
    return(
        <div className="signIn">
            <Header />
            <Auth />
            <Footer />
        </div>
        )
}

export default SignIn;