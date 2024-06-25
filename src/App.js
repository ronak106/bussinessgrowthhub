import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Login from './Components/Login';
function App() {
  return (
    <>

   <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Error/>} ></Route>

        </Routes>
      
   
    
    
    </>
  );
}

export default App;
