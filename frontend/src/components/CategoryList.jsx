import React, { useState, useEffect } from 'react';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        setCategories(data.categories); 
      } catch (error) {
        console.error('Error while fetching categories', error);
      }
    };

    fetchCategories();
  }, []); 

  return (
    <div>
      <h2>Categories</h2>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id}>{category.name}</div>
        ))
      ) : (
        <p>No categories to display</p>
      )}
    </div>
  );
}

export default CategoryList;
