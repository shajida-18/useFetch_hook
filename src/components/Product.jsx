// Products.js
import React from "react";
import useFetch from "../hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="products">
      <h2>Products</h2>
      <ul>
        {data.slice(0, 40).map((item) => (
          <li key={item.id} className="product-item">
            <img src={item.images[0]} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
