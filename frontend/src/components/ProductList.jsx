import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Wafelki');

  const handleSectionSelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?category=${selectedCategory}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error while retrieving products', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <SubMenu onSectionSelect={handleSectionSelect} />
      {products.map((product) => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}

export default ProductList;
