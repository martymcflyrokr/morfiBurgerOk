import { Container } from "@mui/material"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {
    return (
        <>
            <Container>
                <div>
                    <img src="./images/carrouselimgs/img5.jpg" alt="imagen-portada"/>
                    <ItemListContainer title={"BIENVENIDO A MORFIBURGER"}/>
                </div>
            </Container>
        </>
    )
}
export default Home