<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Row, Col, ListGroup, Image, Card, Form, InputGroup } from 'react-bootstrap';
=======
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import Loader from '../components/Loader';
import { useCreateOrderMutation } from '../slices/ordersApiSlice';
import { clearCartItems } from '../slices/cartSlice';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
=======

  const cart = useSelector((state) => state.cart);

>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping');
    } else if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);
<<<<<<< HEAD

  const subtotal = cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const taxRate = 0.15;
  const shippingThreshold = 100;
  const shippingCost = subtotal >= shippingThreshold ? 0 : 10;
  const taxAmount = subtotal * taxRate;

  let initialTotal = subtotal + shippingCost + taxAmount;
  const [total, setTotal] = useState(initialTotal);

  const discountThreshold = 199;
  const discountValue = 0.2;

  const applyDiscountCode = () => {
    if (subtotal >= discountThreshold && discountCode === 'MAJ20' && !discountApplied) {
      setDiscountApplied(true);
      const discountedTotal = initialTotal * (1 - discountValue);
      setTotal(discountedTotal);
      toast.success('Rabat został zastosowany!');
    } else {
      toast.error('Za mała wartość zamówienia. Minimalna wartość to 199 zł lub kod jest niepoprawny.');
    }
  };

  const placeOrderHandler = async () => {
    try {
      const orderData = {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: subtotal,
        shippingPrice: shippingCost,
        taxPrice: taxAmount,
        totalPrice: total,
        discountCode: discountApplied ? discountCode : "",
        guestInfo: cart.guestInfo 
      };
      const res = await createOrder(orderData).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (error) {
      toast.error(error.data ? error.data.message : error.message);
    }
  };
  
=======
  
  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (error) {
      toast.error(error);
    }
  };
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
<<<<<<< HEAD
              <h2>Adres wysyłki</h2>
              <p>
                <strong>Adres:</strong> {cart.shippingAddress.address}, {cart.shippingAddress.city} {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Metoda płatności</h2>
              <strong>Metoda:</strong> {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Zamówione produkty</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Twój koszyk jest pusty</Message>
=======
              <h2>Shipping address</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Ordered products</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
<<<<<<< HEAD
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </Col>
                        <Col md={4}>{item.qty} x {item.price}zł = {item.qty * item.price}zł</Col>
=======
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price}zł = 
                          {(item.qty * (item.price * 100)) / 100}zł
                        </Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
<<<<<<< HEAD
              <ListGroup.Item><h2>Podsumowanie zamówienia</h2></ListGroup.Item>
              <ListGroup.Item>
                <Row><Col>Produkty</Col><Col>{subtotal.toFixed(2)} zł</Col></Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row><Col>Wysyłka</Col><Col>{shippingCost} zł</Col></Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row><Col>Podatki</Col><Col>{taxAmount.toFixed(2)} zł</Col></Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row><Col>Suma</Col><Col>{total.toFixed(2)} zł</Col></Row>
              </ListGroup.Item>
              {!discountApplied ? (
                <ListGroup.Item>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Kod rabatowy"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <Button variant="outline-secondary" onClick={applyDiscountCode} disabled={!discountCode}>
                      Zastosuj
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              ) : (
                <ListGroup.Item style={{ color: 'green' }}>KOD RABATOWY: MAJ20</ListGroup.Item>
              )}
              <ListGroup.Item>
                {error && <Message variant='danger'>{error.data ? error.data.message : error.message}</Message>}
=======
              <ListGroup.Item>
                <h2>Order summary</h2>
              </ListGroup.Item>
              {cart.cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col>Products</Col>
                  <Col>{(item.qty * (item.price * 100)) / 100}zł</Col>
                </Row>
              </ListGroup.Item>
              ))}
                            {cart.cartItems.map((item, index) => (

              <ListGroup.Item>
                <Row>
                  <Col>Shipping Price</Col>
                  <Col>{((((item.qty * (item.price * 100)) / 100 * 0.15)+(item.qty * (item.price * 100)) / 100) > 100) ? '0' : '10'} zł</Col>
                </Row>
              </ListGroup.Item>
                            ))}

              {cart.cartItems.map((item, index) => (
              <ListGroup.Item>
                <Row>
                  <Col>Tax Price</Col>
                  <Col>{((item.qty * (item.price * 100)) / 100 * 0.15).toFixed(2)} zł</Col>
                </Row>
              </ListGroup.Item>
              ))}
              {cart.cartItems.map((item, index) => (
              <ListGroup.Item>
                <Row>
                  <Col>Summary</Col>
                  <Col>{
  ((((item.qty * (item.price * 100)) / 100 * 0.15) + (item.qty * (item.price * 100)) / 100) > 100) ? 
  (((item.qty * (item.price * 100)) / 100 * 0.15) + (item.qty * (item.price * 100)) / 100).toFixed(2) + ' zł' :
  (parseFloat((((item.qty * (item.price * 100)) / 100 * 0.15) + (item.qty * (item.price * 100)) / 100) + 10)).toFixed(2) + ' zł'
}</Col>

                </Row>
              </ListGroup.Item>
              ))}
              <ListGroup.Item>
                {error && (
                  <Message variant='danger'>{error.data.message}</Message>
                )}
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
<<<<<<< HEAD
                  disabled={cart.cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  Zamów
=======
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Order
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                </Button>
                {isLoading && <Loader />}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

<<<<<<< HEAD
export default PlaceOrderScreen;
=======
export default PlaceOrderScreen;
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
