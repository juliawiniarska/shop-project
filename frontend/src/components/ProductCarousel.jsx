import { Link } from 'react-router-dom';
import { Form, Button, Carousel, Image, Row, Col } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../slices/cartSlice';
import { Modal } from 'react-bootstrap';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showQuantitySelect, setShowQuantitySelect] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});


  const { data: products, isLoading, error } = useGetTopProductsQuery();
  const [carouselQty, setCarouselQty] = useState(1);

  const handleCarouselQtyChange = (newQty) => {
    setCarouselQty(newQty);
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    dispatch(addToCart({ ...product, qty: carouselQty }));
    setShow(true);
  };

  
  const splitProductsIntoPairs = (products) => {
    const pairs = [];
    for (let i = 0; i < products.length; i += 2) {
      const pair = products.slice(i, i + 2);
      pairs.push(pair);
    }
    return pairs;
  };

  const maxImageHeight = 250; 

  const linkStyle = {
    textDecoration: 'none', 
    color: 'inherit', 
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <div>
<<<<<<< HEAD
      <h2 className='text-center mb-4'>Bestsellery 🔥</h2>
=======
      <h2 className='text-center mb-4'>Bestsellers 🔥</h2>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      <Carousel pause='hover' className='mb-4' interval={6000}>
        {splitProductsIntoPairs(products).map((pair, index) => (
           <Carousel.Item key={index}>
           <Row>
             {pair.map((product) => (
                <Col key={product._id} sm={6}>
                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 'auto',
                        padding: '10px',
                        borderRadius: '10px',
                      }}>
                      <div style={{ marginBottom: '10px' }}>
                   <Image src={product.image} alt={product.name} fluid style={{
                            maxWidth: '100%',
                            height: `${maxImageHeight}px`,
                          }} />
                          </div>
                          <h3>
                          <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit', fontSize: '18px', marginTop: '10px' }}>
                            {product.name} ({product.price} zł)
                          </Link>
                        </h3>
                   <div className='text-center'>
                        {showQuantitySelect && (
                          <Form.Control
                            as='select'
                            value={carouselQty}
                            onChange={(e) =>
                              handleCarouselQtyChange(Number(e.target.value))
                            }
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        )}
                    </div>
<<<<<<< HEAD
                   <Button variant="primary" onClick={() => handleAddToCart(product)}>Dodaj do koszyka</Button>
=======
                   <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to cart</Button>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                 </div>
               </Col>
             ))}
           </Row>
         </Carousel.Item>
        ))}
      </Carousel>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
<<<<<<< HEAD
          <Modal.Title>Produkt dodany do koszyka</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedProduct.name} został dodany do koszyka</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>Kontynuuj zakupy</Button>
          <Button variant='primary' onClick={() => navigate('/cart')}>Przejdź do koszyka</Button>
=======
          <Modal.Title>Product added to the cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedProduct.name} has been added to your cart</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>Continue shopping</Button>
          <Button variant='primary' onClick={() => navigate('/cart')}>Go to cart</Button>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ProductCarousel;
