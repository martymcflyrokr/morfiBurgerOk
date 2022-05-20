import './App.css';
import './test.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer title={"contenedor de items"} />
    </div>
  )
}
export default App;
