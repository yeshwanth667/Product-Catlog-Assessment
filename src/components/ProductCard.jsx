import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { formatCategory } from '../utils/CategoryUtils';

function ProductCard({ product }) {

  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <small>{formatCategory(product.category)}</small>
    </Link>
  );
}

export default ProductCard;