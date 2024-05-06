import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Form, FormControl } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
} from '../../slices/categoriesApiSlice';
import { toast } from 'react-toastify';

const CategoryListScreen = () => {
  const { data, isLoading, error, refetch } = useGetCategoriesQuery();

  const [deleteCategory, { isLoading: loadingDelete }] = useDeleteCategoryMutation();
  const [createCategory] = useCreateCategoryMutation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = searchTerm
    ? data?.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const deleteHandler = async (id) => {
<<<<<<< HEAD
    if (window.confirm('Na pewno chcesz usunąć?')) {
      try {
        await deleteCategory(id).unwrap();
        toast.success('Kategoria usunięta');
=======
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await deleteCategory(id).unwrap();
        toast.success('Category deleted');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || 'Error occurred while deleting the category');
      }
    }
  };



  return (
    <>
      <Row className='align-items-center mb-3'>
        <Col md={4}>
<<<<<<< HEAD
          <h1>Kategorie</h1>
        </Col>
        <Col md={4}>
        <Form inline>
            <FormControl
              type="text"
              placeholder="Szukaj kategorii..."
=======
          <h1>Categories</h1>
        </Col>
        <Col md={4}>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search category..."
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Col>
        <Col className='text-end'>
        <LinkContainer to='/admin/category/create'>
          <Button className='my-3'>
<<<<<<< HEAD
            <FaPlus /> Dodaj kategorię
=======
            <FaPlus /> Add Category
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
          </Button>
          </LinkContainer>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data?.message || 'Error loading categories'}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
<<<<<<< HEAD
              <th>NAZWA</th>
              <th>OPIS</th>
              <th>AKCJE</th>
=======
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            </tr>
          </thead>
          <tbody>
            {filteredCategories?.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                <LinkContainer to={`/admin/category/${category._id}/edit`}>
                <Button variant='light' className='btn-sm'>
                  <FaEdit />
                </Button>
              </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(category._id)}
                  >
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

export default CategoryListScreen;
