import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import data from "../../data";

const Recipe = () => {

    const datas = data.map(values => {

        const urlId = window.location.href.split("/");

        if (values.id === urlId[3]) {
            return (
                <div>
                    <h4>{values.category}</h4>
                    <h1>{values.name}</h1>
                    <img src={values.image} alt={values.imageDesc} />
                    <span>{values.desc}</span>
                    <p>{values.recipe}</p>
                </div>
            )
        }
    })


    return (
        <div>
            <Header />
            {datas}
            <Footer />
        </div>
    )
};

export default Recipe;