import Header from "../../components/header/header";
import Presentation from "../../components/presentation/presentation";
import Infos from "../../components/infos/infos";
import Footer from "../../components/footer/footer";

function Home() {
    return(
        <div className="home">
            <Presentation />
            <Infos />
        </div>
        )
}

export default Home;