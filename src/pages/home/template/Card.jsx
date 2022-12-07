const Card = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.imageDesc} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
            <div>
                <button>Ver Receita</button>
            </div>
        </div>
    )
}

export default Card