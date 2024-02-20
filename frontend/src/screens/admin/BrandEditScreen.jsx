import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetBrandDetailsQuery,
  useUpdateBrandMutation,
} from '../../slices/brandsApiSlice';

const BrandEditScreen = () => {
  const { id: brandId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const { data: brand, isLoading: isLoadingDetails, error: errorDetails } = useGetBrandDetailsQuery(brandId);
  const [updateBrand, { isLoading: isUpdating, isError, error: updateError }] = useUpdateBrandMutation();

  useEffect(() => {
    if (brand) {
      setName(brand.name);
    }
  }, [brand]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateBrand({
        brandId,
        name,
      }).unwrap();
      toast.success('The brand has been updated');
      navigate('/admin/brandlist');
    } catch (err) {
      toast.error(updateError?.data?.message || 'Failed to update the brand');
    }
  };

  return (
    <>
      <Link to='/admin/brandlist' className='btn btn-light my-3'>
        Go back
      </Link>
      <FormContainer>
        <h1>Edit Brand</h1>
        {isLoadingDetails || isUpdating ? <Loader /> : errorDetails ? (
          <Message variant='danger'>{errorDetails.data?.message || 'Error loading brands data'}</Message>
        ) : (
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand name'
                value={name}
                onChange={(e) => setName(e.target.value)}
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

export default BrandEditScreen;
