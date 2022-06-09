import './App.css';
import './test.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import Detalle from './pages/Detalle'
import Home from './pages/Home';
import Cart from './pages/Cart'
import Categoria from './pages/Categoria'
import { CartProvider } from './context/CartContext';

function App() {

    return (
        <div className="App">
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/categoria/:categoria' element={<Categoria/>}/>
                    <Route path='/item/:id' element={<Detalle/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route
                        path='/productos'
                        element={<ItemListContainer title = {
                            "NUESTROS PRODUCTOS"
                        } />
                        }
                    />
                    <Route path='/contacto' element={<Contacto/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
        </div>
    )

}
export default App;
