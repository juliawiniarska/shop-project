import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetCategoryDetailsQuery,
  useUpdateCategoryMutation,
} from '../../slices/categoriesApiSlice';

const CategoryEditScreen = () => {
  const { id: categoryId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { data: category, isLoading: isLoadingDetails, error: errorDetails } = useGetCategoryDetailsQuery(categoryId);
  const [updateCategory, { isLoading: isUpdating, isError, error: updateError }] = useUpdateCategoryMutation();

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateCategory({
        categoryId,
        name,
        description,
      }).unwrap();
      toast.success('Kategoria została zaktualizowana');
      navigate('/admin/categorylist');
    } catch (err) {
      toast.error(updateError?.data?.message || 'Nie udało się zaktualizować kategorii');
    }
  };

  return (
    <>
      <Link to='/admin/categorylist' className='btn btn-light my-3'>
        Go back
      </Link>
      <FormContainer>
        <h1>Edit Category</h1>
        {isLoadingDetails || isUpdating ? <Loader /> : errorDetails ? (
          <Message variant='danger'>{errorDetails.data?.message || 'Error loading category data'}</Message>
        ) : (
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter the category description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
        {isError && <Message variant='danger'>{updateError?.data?.message || 'An error occurred during the update'}</Message>}
      </FormContainer>
    </>
  );
};

export default CategoryEditScreen;
