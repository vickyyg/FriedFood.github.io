import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navegador from './components/Nav/Nav';
import Carrousel from './components/Carrousel/Carrousel';
import Product from './components/Item/Item';
import Footer from './components/Footer/Footer';
import CartContent from './components/CartContent/CartContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div style={{ backgroundColor: '#EEEEEE' }}>
      <BrowserRouter>
        <Navegador />
        <Carrousel />

        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/item-count" element={<ItemCount />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
