import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateCategoryMutation } from '../../slices/categoriesApiSlice';
import FormContainer from '../../components/FormContainer'; 
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const CategoryCreateScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState(null);

  const [createCategory, { isLoading, isError, error }] = useCreateCategoryMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      setMessage('Wszystkie pola są wymagane');
      return;
    }
    try {
      await createCategory({ name, description }).unwrap();
      navigate('/admin/categorylist');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <h1>Dodaj kategorię</h1>
      {isLoading && <Loader />}
      {message && <Message variant="danger">{message}</Message>}
      {isError && <Message variant="danger">{error?.data?.message || 'An error occurred'}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Nazwa</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz nazwę'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Opis</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz opis'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={isLoading}>
          Dodaj kategorię
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CategoryCreateScreen;
