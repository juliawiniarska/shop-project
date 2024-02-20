import React, { useState, useEffect } from 'react';
import '../assets/styles/submenu.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetCategoriesQuery } from '../slices/categoriesApiSlice';
import { useGetBrandsQuery } from '../slices/brandsApiSlice'; 

function SubMenu() {
  const [activeSection, setActiveSection] = useState(''); 
  const [showBrands, setShowBrands] = useState(false); 
  const { data: categories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategoriesQuery();
  const { data: brands, isLoading: isLoadingBrands, isError: isErrorBrands } = useGetBrandsQuery(); 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments[0] === "category" && pathSegments[1]) {
      const currentCategory = categories?.find(category => category.name.toLowerCase() === decodeURIComponent(pathSegments[1]).toLowerCase());
      if (currentCategory) {
        setActiveSection(currentCategory.name);
      }
    } else {
      setActiveSection('');
    }
  }, [location, categories]);

  const handleSectionClick = (sectionName, type) => {
    setActiveSection(sectionName);
    if (type === 'category') {
      navigate(`/category/${encodeURIComponent(sectionName)}`);
    } else if (type === 'brand') {
      navigate(`/brand/${encodeURIComponent(sectionName)}`); 
    }
  };

  if (isLoadingCategories || isLoadingBrands) return <div>Loading...</div>;
  if (isErrorCategories || isErrorBrands) return <div>Error loading data</div>;

  return (
    <div className="sub-menu-container">
      {categories?.map((category) => (
        <button
          key={category._id}
          className={`sub-menu-button ${category.name === activeSection ? 'active' : ''}`}
          onClick={() => handleSectionClick(category.name, 'category')}
        >
          {category.name}
        </button>
      ))}
      <div 
        className="sub-menu-button"
        onMouseOver={() => setShowBrands(true)}
        onMouseLeave={() => setShowBrands(false)}
      >
        Brands
        {showBrands && (
          <div className="brands-dropdown">
            {brands?.map((brand) => (
              <div
                key={brand._id}
                className="brand-item"
                onClick={() => handleSectionClick(brand.name, 'brand')}
              >
                {brand.name}
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
  );
}

export default SubMenu;
