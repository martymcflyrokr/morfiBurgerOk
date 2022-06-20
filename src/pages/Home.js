import { Container, Stack, Item } from "@mui/material"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Banner from '../components/Banner/Banner'
import Infografia from "../components/Infografia/Infografia"
import Novedades from "../components/Novedades/Novedades"


const Home = () => {

    return (
            <div>
                <div className='contenedor-imagenes-slide' style={{width:'100%'}}>
                <Banner/>
                <Infografia/>
                </div>
            <Container>
                <Novedades/>
                <ItemListContainer title={"NUESTROS PRODUCTOS"}/>
            </Container>
            </div>
    )
}
export default Home