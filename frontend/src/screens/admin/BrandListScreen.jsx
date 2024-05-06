import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Form, FormControl } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
  useGetBrandsQuery,
  useDeleteBrandMutation,
  useCreateBrandMutation,
} from '../../slices/brandsApiSlice';
import { toast } from 'react-toastify';

const BrandListScreen = () => {
  const { data, isLoading, error, refetch } = useGetBrandsQuery();

  const [deleteBrand, { isLoading: loadingDelete }] = useDeleteBrandMutation();
  const [createBrand] = useCreateBrandMutation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBrands = searchTerm
    ? data?.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const deleteHandler = async (id) => {
    if (window.confirm('Na pewno chcesz usunąć?')) {
      try {
        await deleteBrand(id).unwrap();
        toast.success('Firma usunięta');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || 'Error occurred while deleting the brand');
      }
    }
  };



  return (
    <>
      <Row className='align-items-center mb-3'>
        <Col md={4}>
          <h1>Firmy</h1>
        </Col>
        <Col md={4}>
        <Form inline>
            <FormControl
              type="text"
              placeholder="Szukaj firmy..."
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Col>
        <Col className='text-end'>
        <LinkContainer to='/admin/brand/create'>
          <Button className='my-3'>
            <FaPlus /> Dodaj firmę
          </Button>
          </LinkContainer>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data?.message || 'Error loading the brand'}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>NAZWA</th>
              <th>AKCJE</th>
            </tr>
          </thead>
          <tbody>
            {filteredBrands?.map((brand) => (
              <tr key={brand._id}>
                <td>{brand.name}</td>
                <td>
                <LinkContainer to={`/admin/brand/${brand._id}/edit`}>
                <Button variant='light' className='btn-sm'>
                  <FaEdit />
                </Button>
              </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(brand._id)}
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

export default BrandListScreen;
