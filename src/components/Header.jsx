import React from 'react';
import './Header.css';

function Header({ search, setSearch, categories, selectedCategory, setSelectedCategory }) {
  return (
    <header className="header">
      <h1 className="logo">Product Catalog</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
