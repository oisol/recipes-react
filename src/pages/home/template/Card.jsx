const Card = (props) => {
    return (
        <div className="bg-white sm:w-44 sm:h-52 sm:mt-0 w-2/3 mt-3 rounded-xl p-2 flex flex-col items-center cursor-pointer shadow-3xl">
            <img src={props.image} alt={props.imageDesc} className="w-44 h-32 rounded-lg"/>
            <div>
                <h3>{props.name}</h3>
                <p className="h-2 overflow-hidden text-xs">{props.desc}</p>
            </div>
            <div>
                <button>Ver Receita</button>
            </div>
        </div>
    )
}

const style = {
    mainContent: ``,
}

export default Card