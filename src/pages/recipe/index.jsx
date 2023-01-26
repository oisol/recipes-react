import { Link } from 'react-router-dom';
import data from "../../data";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Recipe = () => {

    const urlId = window.location.href.split("/");

    const datas = data.map(values => {
        if (values.id === urlId[3]) {
            return (
                <div key={values.id} className="flex flex-col items-center mt-3">
                    <button className='font-extrabold text-orange-400 hover:text-orange-700'>
                        <Link to={`/${values.category}`}>{values.category}</Link>
                    </button>
                    <h1 className='font-semibold text-xl text-gray-700'>{values.name}</h1>
                    <img className='mt-2 w-96 h-72 object-fill' src={values.image} alt={values.imageDesc} />
                    <span className='font-thin mt-2 w-4/6'>{values.desc}</span>
                    <p className='font-medium mt-4 mb-10 w-5/6'>{values.recipe}</p>
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

const style = {
    mainContent: ``,
}

export default Recipe;