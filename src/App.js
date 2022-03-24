import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
 


function App() {
  return ( 
     <>
    
     <Navbar/>
         
       
         <Routes>
      <Route exact path="/" element={<Home/>}/>
       <Route exact path="/products" element={<Products/>}/>
       <Route exact path="/products/:id" element={<Product/>}/>
      

       </Routes>   
         
     </> 
  );
}

export default App;
