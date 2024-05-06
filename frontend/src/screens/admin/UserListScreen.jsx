import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Form, FormControl, Checkbox } from 'react-bootstrap'; // Upewnij się, że Checkbox jest dostępny w Twojej wersji React-Bootstrap
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';

const UserListScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdminsOnly, setShowAdminsOnly] = useState(false);

  const deleteHandler = async (id) => {
<<<<<<< HEAD
    if (window.confirm('Na pewno chcesz usunąć?')) {
      try {
        await deleteUser(id).unwrap();
        refetch();
        toast.success('Użytkonik usunięty');
=======
    if (window.confirm('Are you sure you want to delete the user?')) {
      try {
        await deleteUser(id).unwrap();
        refetch();
        toast.success('User deleted');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      } catch (err) {
        toast.error(err?.data?.message || 'An error occurred');
      }
    }
  };

  const filteredUsers = users ? users.filter((user) => {
    const matchesSearchTerm = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return showAdminsOnly ? matchesSearchTerm && user.isAdmin : matchesSearchTerm;
  }) : [];

  return (
    <>
      <Row className='align-items-center mb-3'>
        <Col md={3}>
<<<<<<< HEAD
          <h1>Użytkownicy</h1>
        </Col>
        <Col md={5}>
        <Form inline>
            <FormControl
              type="text"
              placeholder="Szukaj po imieniu lub emailu"
=======
          <h1>Users</h1>
        </Col>
        <Col md={5}>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search by name or email"
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              className="mr-sm-2"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Col>
        <Col md={2}>
          <Form.Check 
            type="checkbox" 
<<<<<<< HEAD
            label="Pokaż admin" 
            onChange={(e) => setShowAdminsOnly(e.target.checked)} 
          />
        </Col>
        
        <Col md={2} className='text-right'>
          <LinkContainer to='/admin/user/create'>
            <Button>
              <i className='fas fa-plus'></i> Dodaj użytkownika
=======
            label="Show Admins" 
            onChange={(e) => setShowAdminsOnly(e.target.checked)} 
          />
        </Col>
        <Col md={2} className='text-right'>
          <LinkContainer to='/admin/user/create'>
            <Button>
              <i className='fas fa-plus'></i> Add User
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || 'An error occurred'}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
<<<<<<< HEAD
              <th>IMIĘ</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>AKCJE</th>
=======
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>ACTIONS</th>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                <td>{user.isAdmin ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
