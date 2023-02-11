import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Card = (props) => {

    // Mostrar descrição da receita
    const readMoreHandler = () => {
        return (
            Swal.fire(`${props.desc}`)
        )
    }

    return (
        <div className={style.mainDiv}>

            <Zoom >
                <img src={props.image} alt={props.imageDesc} className={style.cardImage}/>
            </Zoom>

            <div className={style.cardTitleDiv}>
                <h3 className={style.cardTitle}>{props.name}</h3>
                <p className={style.cardDesc}>{props.desc}</p>
                <button className={style.cardReadMoreBtn} onClick={() => readMoreHandler()} >Leia mais</button>
            </div>
            <div className={style.cardMainBtnDiv} >
                <button className={style.cardMainBtn}><Link to={`/${props.id}`}>Ver Receita</Link></button>
            </div>

        </div>
    )
};

const style = {
    mainDiv: `bg-white sm:w-72 w-52 sm:h-60 h-56 sm:mt-0 mt-3 rounded-xl flex flex-col shadow-3xl sm:items-center`,
    // Image
        cardImage: 'w-52 h-32 rounded-lg sm:pt-1 cursor-zoom-in',
   // Title & Desc
        cardTitleDiv: 'p-2',
        cardTitle: 'max-h-5 sm:overflow-visible overflow-y-scroll',
        cardDesc: 'sm:block hidden h-3 overflow-hidden text-xs',
        cardReadMoreBtn: 'text-sm text-gray-700 hover:text-blue-500',
    // Button
        cardMainBtnDiv: 'flex items-center justify-center',
        cardMainBtn: 'bg-orange-400 rounded-full w-28 h-8 text-white font-semibold text-sm'
};

export default Card;