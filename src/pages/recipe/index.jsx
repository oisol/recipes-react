import { Link } from 'react-router-dom';
import data from "../../data";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Recipe = () => {

    const urlId = window.location.href.split("/");

    const datas = data.map(values => {
        if (values.id === urlId[3]) {
            return (
                <div key={values.id}>
                    <h4>{values.category}</h4>
                    <h1>{values.name}</h1>
                    <img src={values.image} alt={values.imageDesc} />
                    <span>{values.desc}</span>
                    <p>{values.recipe}</p>
                </div>
            )
        }
    });

    // Retornar aviso de 404 se não houver id no DB que coincida ao da URL
    const notFound = data.map(values => {
        if (values.id.includes(urlId[3])) {
            return (
                true
            )
        } else {
            return (
                false
            )
        }
    });

    return (
        
        <div>
            <Header />
            {
              notFound.includes(true)
              ?
              datas
              :
              <div>
                  <h1>404</h1>
                  <button><Link to='/'>Voltar para início</Link></button>
              </div>
            }
            <Footer />
        </div>
    )
};

export default Recipe;