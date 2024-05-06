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
<<<<<<< HEAD
      setMessage('Wszystkie pola są wymagane');
=======
      setMessage('All fields are required');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
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
<<<<<<< HEAD
      <h1>Dodaj kategorię</h1>
=======
      <h1>Add Category</h1>
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
            placeholder='Wpisz nazwę'
=======
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter category name'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
<<<<<<< HEAD
          <Form.Label>Opis</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wpisz opis'
=======
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter category description'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={isLoading}>
<<<<<<< HEAD
          Dodaj kategorię
=======
          Add Category
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CategoryCreateScreen;
