import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import baner1 from '../assets/1.png';
import baner2 from '../assets/2.png'; 
import baner4 from '../assets/4.png'; 
import baner5 from '../assets/5.png'; 
import '../assets/styles/HomeScreen.css';

export const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
    sort: 'oldest',
  });
  const bannerLinks = [
    '/product/65c618bbd51bed14094750f4	',
    '/product/65ca873659ac713790d442e4',
    '/product/65c6133fd7618df9e4aa5b53',
    '/product/65c4c0af15553785cceb9975'
  ];
  const bannerImages = [baner1, baner2, baner4, baner5]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {!keyword ? (
        <>
          <div className="baner">
          <a href={bannerLinks[currentImageIndex]} target="_blank" rel="noopener noreferrer">
            <img src={bannerImages[currentImageIndex]} alt="Baner" className="baner-image"/>
          </a>          </div>
          <div className="spacer"></div>

          <ProductCarousel />
        </>
      ) : (
        <Link to="/" className="btn btn-light mb-4">
<<<<<<< HEAD
          Wróć do strony głównej
=======
          Go back to the main page
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <Meta />
<<<<<<< HEAD
          <h1>✨Najnowsze produkty✨</h1>
=======
          <h1>✨Latest products✨</h1>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
          <Row className="equal-height-cols justify-content-center">
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
