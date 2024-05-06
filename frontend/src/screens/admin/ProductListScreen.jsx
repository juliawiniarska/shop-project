<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Form, FormControl, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} from '../../slices/productsApiSlice';
import { useGetBrandsQuery } from '../../slices/brandsApiSlice'; 
import { useGetCategoriesQuery } from '../../slices/categoriesApiSlice'; 

import { toast } from 'react-toastify';

const ProductListScreen = () => {
  const { pageNumber = 1 } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const { data: brandsData } = useGetBrandsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();

  const { data, isLoading, error, refetch } = useGetProductsQuery({
    keyword: searchTerm,
    pageNumber,
    brand: selectedBrand,
    category: selectedCategory,
  });

  const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation();

<<<<<<< HEAD
  useEffect(() => {
    refetch();
  }, [selectedCategory]); 

  const deleteHandler = async (id) => {
    if (window.confirm('Na pewno chcesz usunąć?')) {
      try {
        await deleteProduct(id).unwrap();
        toast.success('Produkt usunięty');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || 'Wystąpił błąd');
=======
  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id).unwrap();
        toast.success('Product deleted');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || 'An error occurred');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <Row className="align-items-center mb-3">
        <Col md={3}>
<<<<<<< HEAD
          <h1>Produkty</h1>
        </Col>
        
=======
          <h1>Products</h1>
        </Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        <Col md={3}>
          <Form inline onSubmit={handleSearch}>
            <FormControl
              type="text"
<<<<<<< HEAD
              placeholder="Szukaj produktów..."
=======
              placeholder="Search products..."
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              className="mr-sm-2 mb-2 mb-md-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Col>
  
<<<<<<< HEAD
  
        <Col md={2}>
          <FormSelect value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value=''>Wszystkie firmy</option>
=======
        <Col md={2}>
          <FormSelect onChange={(e) => setSelectedCategory(e.target.value)} className="mb-2 mb-md-0">
            <option value=''>All Categories</option>
            {categoriesData?.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </FormSelect>
        </Col>
  
        <Col md={2}>
          <FormSelect onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value=''>All Brands</option>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            {brandsData?.map(brand => (
              <option key={brand._id} value={brand._id}>{brand.name}</option>
            ))}
          </FormSelect>
        </Col>
<<<<<<< HEAD

        <Col md={2} className="text-md-right text-start">
          <LinkContainer to="/admin/product/create">
            <Button className="my-3">
              <FaPlus /> Dodaj Produkt
=======
  
        <Col md={2} className="text-md-right text-start">
          <LinkContainer to="/admin/product/create">
            <Button className="my-3">
              <FaPlus /> Add Product
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
            </Button>
          </LinkContainer>
        </Col>
      </Row>
 
<<<<<<< HEAD
=======
  

>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data?.message || 'Wystąpił błąd'}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
<<<<<<< HEAD
                <th>ID</th>
                <th>NAZWA</th>
                <th>CENA</th>
                <th>KATEGORIA</th>
                <th>FIRMA</th>
                <th>AKCJE</th>
=======
              <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>ACTIONS</th>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              </tr>
            </thead>
            <tbody>
              {data?.products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}zł</td>
                  <td>{product.category.name}</td>
                  <td>{product.brand.name}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default ProductListScreen;
