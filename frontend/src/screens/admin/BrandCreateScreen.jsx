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
      setMessage('All fields are required');
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
      <h1>Add Brand</h1>
      {isLoading && <Loader />}
      {message && <Message variant="danger">{message}</Message>}
      {isError && <Message variant="danger">{error?.data?.message || 'An error occurred'}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter brand name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={isLoading}>
          Add Brand
        </Button>
      </Form>
    </FormContainer>
  );
};

export default BrandCreateScreen;
