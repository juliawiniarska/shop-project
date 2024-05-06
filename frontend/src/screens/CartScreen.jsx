import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
<<<<<<< HEAD
    navigate('/login?redirect=/shipping&guest=true');
  };
  
=======
    navigate('/login?redirect=/shipping');
  };
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Koszyk</h1>
        {cartItems.length === 0 ? (
          <Message>
<<<<<<< HEAD
            Twój koszyk jest pusty <Link to='/'>Wróć do sklepu</Link>
=======
            Your cart is empty <Link to='/'>Return to the store</Link>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>{item.price} zł</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>{
                        addToCartHandler(item, Number(e.target.value))
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
<<<<<<< HEAD
              Podsumowanie ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                Produkty
=======
              Summary ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                Products
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              </h2>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
                 zł
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
<<<<<<< HEAD
                Przejdź do płatności
=======
                Proceed to payment
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;