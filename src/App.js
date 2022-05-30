import './App.css';
import './test.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList'
import productos from './utils/productMocks'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer title={"NUESTRA SELECCIÓN"}/>
        <div>
          <ItemDetailContainer/>
        </div>
    </div>
  )
  
}
export default App;
