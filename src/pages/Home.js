import { Container, Stack, Item } from "@mui/material"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Banner from '../components/Banner/Banner'
import Infografia from "../components/Infografia/Infografia"


const Home = () => {

    return (
            <div>
                <div className='contenedor-imagenes-slide' style={{width:'100%'}}>
                <Banner/>
                <Infografia/>
                </div>
            <Container>
                <ItemListContainer title={"BIENVENIDO A MORFIBURGER"}/>
            </Container>
            </div>
    )
}
export default Home