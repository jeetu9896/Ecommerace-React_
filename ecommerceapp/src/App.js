import { Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import  Login from './Components/Login'
import  Cart from './Components/Cart'
import  Product from './Components/Product'
import Products from './Components/Products';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Orders from './Components/Orders';
import Payment  from './Components/Payment';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes >
      <Route path ='/' element= {<Home />}></Route>
      <Route path ='/about' element= {<About />}></Route>
      <Route path ='/contact' element= {<Contact />}></Route>
      <Route path ='/login' element= {<Login />}></Route>
      <Route path ='/cart' element= {<Cart />}></Route>
      <Route path ='/product' element= {<Product />}></Route>
      <Route path ='/product:id' element= {<Products />}></Route>
      {/* <Route path ='/' element= {<Footer />}></Route> */}
      <Route path ='/signup' element= {<Signup />}></Route>
      <Route path ='/order' element= {<Orders />}></Route>
      <Route path ='/payment' element= {<Payment />}></Route>
      
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
