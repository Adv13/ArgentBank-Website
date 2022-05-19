import Header from "../../Components/header/header";
import Presentation from "../../components/presentation/presentation";
import Infos from "../../components/infos/infos";
import Footer from "../../Components/footer/footer";

function Home() {
    return(
        <div className="home">
            <Header />
            <Presentation />
            <Infos />
            <Footer />
        </div>
        )
}

export default Home;