import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../slices/cartSlice';

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
<<<<<<< HEAD
      <h1>Wysyłka</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='address'>
          <Form.Label>Adres</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz adres'
=======
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='city'>
<<<<<<< HEAD
          <Form.Label>Miasto</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz miasto'
=======
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='postalCode'>
<<<<<<< HEAD
          <Form.Label>Kod pocztowy</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz kod pocztowy'
=======
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='country'>
<<<<<<< HEAD
          <Form.Label>Państwo</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz państwo'
=======
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
<<<<<<< HEAD
          Kontynuuj
=======
          Continue
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;