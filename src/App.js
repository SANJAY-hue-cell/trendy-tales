import React from 'react' ;
import  './App.css' ;

/* pages */

import NavbarHeader from './components/NavbarHeader';
import Home from './pages/Home' ;
import Collection from './pages/Collection' ;
import Cart from './pages/Cart' ;
import About from './pages/About' ;
import Contact from './pages/Contact' ;
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Products from './pages/Products' ;
import Login from './pages/Login' ;
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

/* routes */ 

import {
  Routes ,
  Route ,
  Navigate
} from 'react-router-dom' ;

/* Toastify */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <ToastContainer />
    <NavbarHeader />
    <SearchBar />
    <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/collection' element={<Collection />}></Route>
     <Route path='/about' element={<About />}></Route>
     <Route path='/contact' element={<Contact />}></Route>
     <Route path='/product/:productId' element={<Products />}></Route>
     <Route path='/cart' element={<Cart />}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/place-order' element={<PlaceOrder />}></Route>
     <Route path='/orders' element={<Orders />}></Route>
    </Routes>
    <Footer />
   </div>
  )
}

export default App