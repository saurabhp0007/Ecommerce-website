import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
            <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
            <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid' />} />
            <Route path='/product' element={<Product />}>
              <Route path=':ProductId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
