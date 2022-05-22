import '../ItemList/itemList.css'
import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
import ItemCount from '../ItemCount/ItemCount';


const ItemList = () => {
    
    return (
        <>
            <Grid container className="contenedor-lista-productos" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item >
                    <Item producto="Burger con queso" precio="500" stock="4">xs=2</Item>
                </Grid>
                <Grid item>
                    <Item producto="Burger completa" precio="700" stock="5">xs=2</Item>
                </Grid>
                <Grid item>
                    <Item producto="Combo con papas" precio="900" stock="9">xs=2</Item>
                </Grid>
                <Grid item>
                    <Item producto="Triple sarpada" precio="1200" stock="3">xs=2</Item>
                </Grid>
                <Grid item>
                    <Item producto="Super doble doble" precio="1320" stock="11">xs=2</Item>
                </Grid>
            </Grid>
        </>
    )

}

export default ItemList