import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';
<<<<<<< HEAD
  const guest = sp.get('guest') === 'true';  
=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit');
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }

  };

  return (
    <FormContainer>
<<<<<<< HEAD
      <h1>Logowanie</h1>
=======
      <h1>Login</h1>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-3' controlId='email'>
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

        <Form.Group className='my-3' controlId='password'>
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

        <Button disabled={isLoading} type='submit' variant='primary'>
<<<<<<< HEAD
          Zaloguj się
=======
          Log in
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        </Button>

         {isLoading && <Loader />} 
      </Form>

      <Row className='py-3'>
        <Col>
<<<<<<< HEAD
          Jesteś tu nowy?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> 
            Zarejestruj się
          </Link>
        </Col>
        {guest && (
          <Col className="text-right">
            <Link to="/guest-info">Zrób zakupy bez zakładania konta</Link>
          </Col>
        )}
=======
          Are you new?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> 
            Register
          </Link>
        </Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;