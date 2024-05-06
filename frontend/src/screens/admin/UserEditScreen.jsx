import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '../../slices/usersApiSlice';

const UserEditScreen = () => {
  const { id: userId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin }).unwrap();
<<<<<<< HEAD
      toast.success('Uzytkonik zaktualizowany pomyślnie');
=======
      toast.success('User updated successfully');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      refetch();
      navigate('/admin/userlist');
    } catch (err) {
      toast.error(err?.data?.message || 'An error occurred.');
    }
};

  

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
<<<<<<< HEAD
        Wróć
      </Link>
      <FormContainer>
        <h1>Edycja Użytkownika</h1>
=======
        Go back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='name'>
<<<<<<< HEAD
              <Form.Label>Imię</Form.Label>
              <Form.Control
                type='name'
                placeholder='Wpisz imię'
=======
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

            <Form.Group className='my-2' controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
<<<<<<< HEAD
              Zaktualizuj
=======
              Update
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;