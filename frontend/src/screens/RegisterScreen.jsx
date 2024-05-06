import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
<<<<<<< HEAD
      toast.error('Hasła nie są takie same');
=======
      toast.error('The passwords are not identical');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <FormContainer>
<<<<<<< HEAD
      <h1>Rejestracja</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Imię</Form.Label>
          <Form.Control
            type='name'
            placeholder='Wpisz imię'
=======
      <h1>Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
<<<<<<< HEAD
            placeholder='Wpisz email'
=======
            placeholder='Enter email'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
<<<<<<< HEAD
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            type='password'
            placeholder='Wpisz hasło'
=======
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
<<<<<<< HEAD
          <Form.Label>Powtórz hasło</Form.Label>
          <Form.Control
            type='password'
            placeholder='Powtórz hasło'
=======
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled={isLoading} type='submit' variant='primary'>
<<<<<<< HEAD
          Zarejestruj
=======
          Register
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        </Button>

        {isLoading && <Loader />}
      </Form>

      <Row className='py-3'>
        <Col>
<<<<<<< HEAD
        Masz już konto?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Zaloguj się
=======
        Do you already have an account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Log in
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;