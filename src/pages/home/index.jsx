import Header from "../../components/Header/Header";
import Advertisement from "./template/Advertisement";
import Article from "./template/Article";
import Main from "./template/Main";

const Home = () => {
    return (
        <div>
            <Header />
            <Article />
            <Advertisement />
            <Main />
        </div>
    )
};

export default Home;