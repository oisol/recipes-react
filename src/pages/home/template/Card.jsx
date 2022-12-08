const Card = (props) => {
    return (
        <div className="bg-white sm:w-72 sm:h-56 sm:mt-0 w-2/4 h-56 mt-3 rounded-xl flex flex-col items-center cursor-pointer shadow-3xl">
            <img src={props.image} alt={props.imageDesc} className="w-52 h-32 rounded-lg pt-1"/>
            <div className="p-2">
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