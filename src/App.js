import './App.css';
import './test.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList'

function App() {
  
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer title={"NUESTRA SELECCIÓN"}/>
    </div>
  )
}
export default App;
