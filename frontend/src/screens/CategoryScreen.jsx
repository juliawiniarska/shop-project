import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { useGetProductsByCategoryQuery } from '../slices/productsApiSlice';

const CategoryScreen = () => {
  const { category } = useParams();
  const [sortOption, setSortOption] = useState('default');
  const [pageNumber, setPageNumber] = useState(1);

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'available', label: 'Available' },
    { value: 'nameAsc', label: 'Name, A to Z' },
    { value: 'nameDesc', label: 'Name, Z to A' },
    { value: 'priceAsc', label: 'Price, ascending' },
    { value: 'priceDesc', label: 'Price, descending' },
  ];

  const { data, isLoading, error } = useGetProductsByCategoryQuery({
    category,
    sort: sortOption,
    pageNumber,
  });

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <>
       <Meta />
      <h1>{`Products in category: ${category}`}</h1>
      <div className="sort-dropdown-container">
        <select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <Row className="equal-height-cols justify-content-center">
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={category} />
        </>
      )}
    </>
  );
};

export default CategoryScreen;
