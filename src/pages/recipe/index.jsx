import data from "../../data";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Recipe = () => {

    const urlId = window.location.href.split("/");

    const datas = data.map(values => {
        if (values.id === urlId[3]) {
            return (
                <div key={values.id} className={style.recipeMainDiv}>

                    <button className={style.recipeCategory}>
                        {values.category}
                    </button>
                    <h1 className={style.recipeTitle}>{values.name}</h1>
                    <img className={style.recipeImg} src={values.image} alt={values.imageDesc} />
                    <em className={style.recipeDesc}>{values.desc}</em>
                    <p className={style.recipeText}>{values.recipe}</p>

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
        
        <div className={style.mainDiv}>
            <Header/>
            {
              notFound.includes(true)
              ?
              datas
              :
              <div className={style.errorMainDiv}>
                  <h1 className={style.errorTitle}>404</h1>
                  <p className={style.errorMessage}>:( Nenhuma receita por aqui.</p>
                  <button className={style.errorButton}><Link to='/'>Voltar para início</Link></button>
              </div>
            }
            <Footer/>
        </div>
    )
};

const style = {
    mainDiv: `flex flex-col justify-between h-screen`,
    // Receita
        recipeMainDiv: 'flex flex-col items-center mt-3',
        recipeCategory: 'text-base sm:text-lg font-bold sm:font-extrabold text-orange-400 hover:text-orange-700',
        recipeTitle: 'font-semibold sm:font-bold text-xl sm:text-2xl sm:mt-2 text-gray-700',
        recipeImg: 'mt-2 sm:mt-3 w-96 sm:w-9/12 h-72 sm:h-96 object-fill sm:object-cover rounded-lg',
        recipeDesc: 'font-thin mt-2 w-4/6',
        recipeText: 'font-medium mt-4 mb-10 w-5/6',
    // 404
        errorMainDiv: 'flex flex-col items-center', 
        errorTitle: 'sm:text-5xl text-2xl sm:cursor-default', 
        errorMessage: 'sm:mt-2 mt-1', 
        errorButton: 'sm:text-xl text-base sm:mt-4 mt-1 hover:text-blue-600 font-semibold', 
    
}

export default Recipe;