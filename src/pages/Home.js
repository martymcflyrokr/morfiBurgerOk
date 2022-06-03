import { Container } from "@mui/material"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {
    return (
        <>
            <Container>
                <div style={{width: '90%'}}>
                    <img src="./images/carrouselimgs/img5.jpg"/>
                    <ItemListContainer title={"BIENVENIDO A MORFIBURGER"}/>
                </div>
            </Container>
            
        </>
    )
}

export default Home