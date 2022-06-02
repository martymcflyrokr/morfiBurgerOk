import { Container } from "@mui/material"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {
    return (
        <>
            <Container>
                <div style={{width: '100%'}}>
                    <img src="./images/carrouselimgs/img5.jpg"/>
                </div>
            </Container>
            <ItemListContainer title={"BIENVENIDO A MORFIBURGER"}/>
        </>
    )
}

export default Home