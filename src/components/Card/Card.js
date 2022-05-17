// functional component
import './Card.css'

const CardItem = () => {
    return(
        <div className="card-item">
            <div>
                <img src="1.png"/>
            </div>
            <p>Titulo</p>
            <span>$150</span>
            <button>Detalle</button>

        </div>
    )
}

export default CardItem