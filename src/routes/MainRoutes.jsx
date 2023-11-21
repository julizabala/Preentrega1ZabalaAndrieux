import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';


const MainRoutes = () => {
    return  (

        <Router>
            <NavBarComponent/>
            <Routes>

               <Route path="/" element={<Home />} />

            </Routes>
        </Router>
        
    );
    
};

export default MainRoutes;

