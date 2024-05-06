import { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../slices/cartSlice';

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Metoda płatności</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Wybierz metodę</Form.Label>
          <Col>
            <Form.Check
              className='my-2'
              type='radio'
              label='PayPal lub karta kredytowa'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked={paymentMethod === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              className='my-2'
              type='radio'
              label='Płatność przy odbiorze'
              id='Płatność przy odbiorze'
              name='paymentMethod'
              value='Płatność przy odbiorze'
              checked={paymentMethod === 'Płatność przy odbiorze'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Kontynuuj
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
