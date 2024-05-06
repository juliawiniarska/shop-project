import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateBrandMutation } from '../../slices/brandsApiSlice';
import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const BrandCreateScreen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const [createBrand, { isLoading, isError, error }] = useCreateBrandMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name) {
<<<<<<< HEAD
      setMessage('Wszystkie pola są wymagane');
=======
      setMessage('All fields are required');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      return;
    }
    try {
      await createBrand({ name }).unwrap();
      navigate('/admin/brandlist');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer>
<<<<<<< HEAD
      <h1>Dodaj Firmę</h1>
=======
      <h1>Add Brand</h1>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      {isLoading && <Loader />}
      {message && <Message variant="danger">{message}</Message>}
      {isError && <Message variant="danger">{error?.data?.message || 'An error occurred'}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
<<<<<<< HEAD
          <Form.Label>Nazwa</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz nazwę firmy'
=======
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter brand name'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={isLoading}>
<<<<<<< HEAD
          Dodaj firmę
=======
          Add Brand
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        </Button>
      </Form>
    </FormContainer>
  );
};

export default BrandCreateScreen;
