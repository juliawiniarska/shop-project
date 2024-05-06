import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from '../slices/ordersApiSlice';

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

<<<<<<< HEAD


=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': paypal.clientId,
            currency: 'PLN',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
<<<<<<< HEAD
      if (order && order.paymentMethod !== 'Płatność przy odbiorze' && !order.isPaid) {
=======
      if (order && !order.isPaid) {
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

<<<<<<< HEAD
  const markAsDeliveredAndPaid = async () => {
    try {
      await deliverOrder(orderId);
      await payOrder({ orderId, details: { payer: {} } }); 
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.message);
    }
  };

=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details }).unwrap();
        refetch();
<<<<<<< HEAD
        toast.success('Zamówienie nie zostało opłacone');
=======
        toast.success('The order has been paid for');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      } catch (err) {
        toast.error(err?.data?.message || err.message);
      }
    });
  }
async function onApproveTest() {
    await payOrder({ orderId, details: { payer: {} } });
    refetch();

<<<<<<< HEAD
    toast.success('Zamówienie zostało opłacone');
=======
    toast.success('The order has been paid for');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
  }

  function onError(err) {
    toast.error(err.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
<<<<<<< HEAD
              <h2>Wysyłka</h2>
              <p>
              <strong>Imię: </strong> {order.user ? order.user.name : order.guestInfo?.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                {order.user ? <a href={`mailto:${order.user.email}`}>{order.user.email}</a> : order.guestInfo?.email}
              </p>
              <p>
                <strong>Adres wysyłki:</strong>
=======
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Shipping address:</strong>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
<<<<<<< HEAD
                  Zamówienie dostarczone {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Zamówienie niedostarczone</Message>
=======
                  The order has been delivered {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not delivered</Message>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              )}
            </ListGroup.Item>

            <ListGroup.Item>
<<<<<<< HEAD
              <h2>Metoda płatności</h2>
              <p>
                <strong>Metoda: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Zapłacone {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Niezapłacone</Message>
=======
              <h2>Payment method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Unpaid</Message>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              )}
            </ListGroup.Item>

            <ListGroup.Item>
<<<<<<< HEAD
              <h2>Lista zamówionych rzeczy</h2>
              {order.orderItems.length === 0 ? (
                <Message>Zamówienie jest puste</Message>
=======
              <h2>List of ordered items</h2>
              {order.orderItems.length === 0 ? (
                <Message>The order is empty</Message>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price}zł = {item.qty * item.price}zł
                        </Col>
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
              <ListGroup.Item>
<<<<<<< HEAD
                <h2>Podsumowanie zamówienia</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Produkty</Col>
=======
                <h2>Order summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Products</Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                  <Col>{order.itemsPrice}zł</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
<<<<<<< HEAD
                  <Col>Dostawa</Col>
=======
                  <Col>Shipping price</Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                  <Col>{order.shippingPrice}zł</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
<<<<<<< HEAD
                  <Col>Podatki</Col>
=======
                  <Col>Tax price</Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                  <Col>{order.taxPrice}zł</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
<<<<<<< HEAD
                  <Col>Suma</Col>
                  <Col>{order.totalPrice.toFixed(2)} zł</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && order.paymentMethod !== 'Płatność przy odbiorze' && (
=======
                  <Col>Total price</Col>
                  <Col>{order.totalPrice}zł</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                <ListGroup.Item>
                  {loadingPay && <Loader />}

                  {isPending ? (
                    <Loader />
                  ) : (
                    <div>
                     <Button
                        style={{ marginBottom: '10px' }}
                        onClick={onApproveTest}
                      >
<<<<<<< HEAD
                        Test płatność
=======
                        Test pay
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                      </Button>

                      <div>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              )}

              {loadingDeliver && <Loader />}

<<<<<<< HEAD
              {userInfo && userInfo.isAdmin && !order.isDelivered && (
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn btn-block'
                  onClick={order.paymentMethod === 'Płatność przy odbiorze' ? markAsDeliveredAndPaid : deliverHandler}
                >
                  {order.paymentMethod === 'Płatność przy odbiorze' ? 'Zaznacz jako dostarczone i opłacone' : 'Zaznacz jako dostarczone'}
                </Button>
=======
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn btn-block'
                      onClick={deliverHandler}
                    >
                      Mark as delivered
                    </Button>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;