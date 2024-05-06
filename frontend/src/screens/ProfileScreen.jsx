import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { setCredentials } from '../slices/authSlice';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { userInfo } = useSelector((state) => state.auth);

  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
<<<<<<< HEAD
      toast.error('Hasła nie są identyczne');
=======
      toast.error('The passwords are not identical');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    } else {
      try {
        const res = await updateProfile({
         
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
<<<<<<< HEAD
        toast.success('Profil zaktualizowany pomyślnie');
=======
        toast.success('Profile updated successfully');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>Profil</h2>

        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='name'>
<<<<<<< HEAD
            <Form.Label>Imię</Form.Label>
            <Form.Control
              type='text'
              placeholder='Wpisz imię'
=======
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
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
            <Form.Label>Potwierdź hasło</Form.Label>
            <Form.Control
              type='password'
              placeholder='Potwierdź hasło'
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

          <Button type='submit' variant='primary'>
<<<<<<< HEAD
            Zaktualizuj
=======
            Update
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
          </Button>
          {loadingUpdateProfile && <Loader />}
        </Form>
      </Col>
      <Col md={9}>
<<<<<<< HEAD
        <h2>Moje zamówienia</h2>
=======
        <h2>My orders</h2>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <Table striped hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
<<<<<<< HEAD
                <th>DATA</th>
                <th>SUMA</th>
                <th>ZAPŁACONE</th>
                <th>DOSTARCZONE</th>
=======
                <th>DATE</th>
                <th>SUMMARY</th>
                <th>PAID</th>
                <th>DELIVERED</th>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
<<<<<<< HEAD
                      Szczegóły
=======
                      Details
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;