import Swal from 'sweetalert2'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Card = (props) => {

    // Mostrar receita em forma de popup
    const recipeHandler = () => {
        return (
            Swal.fire({
                title: `${props.name}`,
                text: `${props.recipe}`,
                imageUrl: `${props.image}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: `${props.imageAlt}`,
                confirmButtonText: 'Bon appétit!'
              })
        )
    }

    // Mostrar descrição da receita
    const readMoreHandler = () => {
        return (
            Swal.fire(`${props.desc}`)
        )
    }

    return (
        <div className="bg-white sm:w-72 w-52 sm:h-60 h-56 sm:mt-0 mt-3 rounded-xl flex flex-col shadow-3xl sm:items-center">

            <Zoom >
                <img src={props.image} alt={props.imageDesc} className="w-52 h-32 rounded-lg sm:pt-1 cursor-zoom-in"/>
            </Zoom>

            <div className="p-2">
                <h3 className='max-h-5 sm:overflow-visible overflow-y-scroll'>{props.name}</h3>
                <p className="sm:block hidden h-3 overflow-hidden text-xs">{props.desc}</p>
                <button className='text-sm text-gray-700 hover:text-blue-500' onClick={() => readMoreHandler()} >Leia mais</button>
            </div>
            <div className='flex items-center justify-center' >
                <button className='bg-orange-400 rounded-full w-28 h-8 text-white font-semibold text-sm' onClick={() => recipeHandler()}>Ver Receita</button>
            </div>
        </div>
    )
}

const style = {
    mainContent: ``,
}

export default Card