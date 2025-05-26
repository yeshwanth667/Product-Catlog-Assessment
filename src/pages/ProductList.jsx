import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Header from '../components/Header';
import '../components/Header.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory ? p.category === selectedCategory : true)
  );

  if (loading || fakeLoading)
    return <Loader onComplete={() => setFakeLoading(false)} />;
  if (error) return <p>Error fetching products..😔😔</p>;

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* <div className="grid-container">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div> */}
      {filteredProducts.length > 0 ? (
        <div className="grid-container">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Product is not available</p>
      )}

    </>
  );
}

export default ProductList;
