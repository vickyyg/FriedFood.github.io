import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Item.css";
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';


const Product = () => {
   const [category, setCategory] = useState('all')

  const products = [
    {
      id: 1,
      image: './public/aroscebolla.webp',
      name: 'Product 1',
      description: 'Full Burguer + Onion Rings',
      price: '$2.99',
      
    },
    {
      id: 2,
      image: './public/CheeseBurguers.png',
      name: 'Product 2',
      description: '2x1 Full Burguer + Cheddar',
      price: '$4.00',
      category: 'sin-tacc',
    },
    {
      id: 3,
      image: './public/asadotira.jpg',
      name: 'Product 3',
      description: 'Tira de Asado Burguer  ',
      price: '$5.75',
    },
    {
      id: 4,
      image: './public/veggie.webp',
      name: 'Product 2',
      description: 'Veggie Beet Burguer',
      price: '$3.00',
    },
    {
      id: 5,
      image: './public/pollofrito.jpg',
      name: 'Fried Chicken',
      description: 'Fried chicken no atc',
      price: '$5.75',
      category: 'sin-tacc',
    },
    {
      id: 6,
      image: './public/papasbacon.webp',
      name: 'Product 2',
      description: 'Bacon Fries',
      price: '$2.99',
    },
    {
      id: 7,
      image: './public/hamburpollofrito.jpg',
      name: 'Product 1',
      description: 'Chicken Burguer',
      price: '$4.99',
      category: 'sin-tacc',
    },
    {
      id: 8,
      image: './public/huevo.jpg',
      name: 'Product 2',
      description: 'Fried Egg Burguer',
      price: '$4.65',
      category: 'sin-tacc',
    },
    {
      id: 9,
      image: './public/4pisos.jpg',
      name: 'Product 3',
      description: 'Four Meat Burguer',
      price: '$6.00',
    },
    // ... Agrega los datos de los demás productos aquí
  ];
    
   const filterProducts = (category) => {
    if (category === 'all') {
      return products;
    } else {
     return products.filter(product => product.category === category)
    }
   };

   const categoryChange = (event) => {
    setCategory(event.target.value);
   };

   const filteredProducts = filterProducts(category);


   return (
    <div className="container">
      <div className="row justify-content-center">
        <div  className="col-lg-12">
          <select  value={category} onChange={categoryChange}>
            <option  value="all">All</option>
            
            <option value="sin-tacc">Sin Tacc</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card d-flex justify-content-center align-items-center" style={{ width: "300px", marginBottom: "20px" }}>
              <img
                style={{ width: "300px", height: "200px", objectFit: "cover" }}
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <Link to="/item-count">Agregar al carrito</Link>
                
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
