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

                    <button className='text-base sm:text-lg font-bold sm:font-extrabold text-orange-400 hover:text-orange-700'>
                        <Link to={`/${values.category}`}>{values.category}</Link>
                    </button>
                    <h1 className='font-semibold sm:font-bold text-xl sm:text-2xl sm:mt-2 text-gray-700'>{values.name}</h1>
                    <img className='mt-2 sm:mt-3 w-96 sm:w-9/12 h-72 sm:h-96 object-fill sm:object-cover rounded-lg' src={values.image} alt={values.imageDesc} />
                    <em className='font-thin mt-2 w-4/6'>{values.desc}</em>
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
        
        <div className="flex flex-col justify-between h-screen">
            <Header/>
            {
              notFound.includes(true)
              ?
              datas
              :
              <div className="flex flex-col items-center">
                  <h1 className='sm:text-5xl text-2xl sm:cursor-default'>404</h1>
                  <p className="sm:mt-2 mt-1">:( Nenhuma receita por aqui.</p>
                  <button className='sm:text-xl text-base sm:mt-4 mt-1 hover:text-blue-600 font-semibold'><Link to='/'>Voltar para início</Link></button>
              </div>
            }
            <Footer/>
        </div>
    )
};

const style = {
    mainContent: ``,
}

export default Recipe;