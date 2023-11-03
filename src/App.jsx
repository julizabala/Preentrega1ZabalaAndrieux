import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <div>
      <NavBarComponent/>
      <ItemListContainer greeting="Bienvenidos a la mejor tienda de comics"/>
    </div>

  )
}

export default App
