import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import Loader from '../components/Loader';
import '../App.css'; 
import './ProductDetail.css'; 
import { formatCategory } from '../utils/CategoryUtils';


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error || !product) return <p>Error loading product.</p>;

  return (
    <>
      <header className="detail-header">
        <h1>Product Detail Page</h1>
      </header>
      <div className="detail-container">
        <img src={product.image} alt={product.title} className="detail-image" />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <span className="category">{formatCategory(product.category)}</span>
            <Link to='/'>Back to Products</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
