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
<<<<<<< HEAD
      toast.success('Firma została zaktualizowana');
      navigate('/admin/brandlist');
    } catch (err) {
      toast.error(updateError?.data?.message || 'Nie udało się zaktualizować firmy');
=======
      toast.success('The brand has been updated');
      navigate('/admin/brandlist');
    } catch (err) {
      toast.error(updateError?.data?.message || 'Failed to update the brand');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    }
  };

  return (
    <>
      <Link to='/admin/brandlist' className='btn btn-light my-3'>
<<<<<<< HEAD
        Wróć
      </Link>
      <FormContainer>
        <h1>Edycja Firmy</h1>
=======
        Go back
      </Link>
      <FormContainer>
        <h1>Edit Brand</h1>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        {isLoadingDetails || isUpdating ? <Loader /> : errorDetails ? (
          <Message variant='danger'>{errorDetails.data?.message || 'Error loading brands data'}</Message>
        ) : (
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
<<<<<<< HEAD
              <Form.Label>Nazwa</Form.Label>
              <Form.Control
                type='text'
                placeholder='Wpisz nazwę firmy'
=======
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand name'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
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
        {isError && <Message variant='danger'>{updateError?.data?.message || 'An error occurred during the update'}</Message>}
      </FormContainer>
    </>
  );
};

export default BrandEditScreen;
