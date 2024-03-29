import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Advertisement from "./template/Advertisement";
import Article from "./template/Article";
import Main from "./template/Main";
import Testimonal from "./template/Testimonal";

const Home = () => {
    return (
        <div>
            <Header />
            <Article />
            <Advertisement />
            <Main />
            <Testimonal />
            <Footer />
        </div>
    )
};

export default Home;