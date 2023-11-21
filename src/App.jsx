import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainRoutes from './routes/MainRoutes';



function App() {



  
  return (
    <div>
      <MainRoutes  />
    </div>

  )
}

export default App
