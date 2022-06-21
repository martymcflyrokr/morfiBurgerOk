import Infografia from '../components/Infografia/Infografia'
import ItemList from '../components/ItemList/ItemList'
import { Container } from "@mui/material"

const Categoria = () => {

    return (
        <Container>
            <div className="contenedor-list">
                <p className="title-item-list-container"></p>
                <ItemList title={"Lista de productos por categoria"}/>
                <Infografia/>
            </div>
        </Container>
    )

}

export default Categoria