import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import FormContainer from '../../components/FormContainer'; 
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const UserCreateScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState(null);

  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage('All fields are required');
      return;
    }
    try {
      await register({ name, email, password, isAdmin }).unwrap();
      navigate('/admin/userlist');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <h1>Add User</h1>
      {isLoading && <Loader />}
      {message && <Message variant="danger">{message}</Message>}
      {isError && <Message variant="danger">{error?.data?.message || 'An error occurred'}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='isAdmin'>
          <Form.Check
            type='checkbox'
            label='Admin'
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          ></Form.Check>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={isLoading}>
          Register
        </Button>
      </Form>
    </FormContainer>
  );
};

export default UserCreateScreen;
