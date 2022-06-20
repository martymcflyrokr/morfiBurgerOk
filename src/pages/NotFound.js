import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const NotFound = () => {
    return(
        <div>
            <div className='contenedor-notfound'>
                <h1>PAGINA NO ENCONTRADA</h1>
                <p>Quizás te interesen algunos de nuestros productos</p>
            </div>
            <ItemListContainer/>
        </div>
    )
}
export default NotFound