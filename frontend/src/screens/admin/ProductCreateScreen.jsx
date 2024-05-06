import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useCreateProductMutation,
  useUploadProductImageMutation,
} from '../../slices/productsApiSlice';
import { useGetCategoriesQuery } from '../../slices/categoriesApiSlice';
import { useGetBrandsQuery } from '../../slices/brandsApiSlice';


const ProductCreateScreen = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const [createProduct, { isLoading: isLoadingCreate }] = useCreateProductMutation();
  const [uploadProductImage, { isLoading: loadingUpload }] = useUploadProductImageMutation();
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery();
  const { data: brands, isLoading: isLoadingBrands } = useGetBrandsQuery();

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await uploadProductImage(formData).unwrap();
      setImage(response.image);
      toast.success('Zdjęcie zostało załadowane');
    } catch (error) {
      console.error(error);
      toast.error('Zdjęcie nie zostało załadowane');
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      price,
      image,
      brand, 
      category, 
      countInStock,
      description,
    };
  
    try {
      await createProduct(productData).unwrap();
      toast.success('Produkt został dodany');
      navigate('/admin/productlist');
    } catch (error) {
      console.error(error);
      toast.error('Produkt nie został dodany.: ' + error.data?.message || 'Error');
    }
  };
  
  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Wróć
      </Link>
      <FormContainer>
        <h1>Dodaj Produkt</h1>
        {isLoadingCreate && <Loader />}
        {isLoadingCategories && <Loader />}
        {isLoadingBrands && <Loader />}
        <Form onSubmit={submitHandler}>

          <Form.Group controlId='name'>
            <Form.Label>Nazwa</Form.Label>
            <Form.Control
              type='text'
              placeholder='Wpisz nazwę'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='price'>
              <Form.Label>Cena</Form.Label>
              <Form.Control
                type='number'
                placeholder='Wpisz cenę'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='brand'>
            <Form.Select value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value=''>Wybierz...</option>
              {brands?.map((b) => (
                <option key={b._id} value={b._id}>
                  {b.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Ilość</Form.Label>
              <Form.Control
                type='number'
                placeholder='Wpisz ilość'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

          <Form.Group controlId='category'>
            <Form.Label>Kategoria</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value=''>Wybierz...</option>
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId='image'>
            <Form.Label>Obraz</Form.Label>
            <Form.Control
              type='text'
              placeholder='Wpisz url obrazu'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.Control type='file' label='Wybierz plik' custom onChange={uploadFileHandler}></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
              <Form.Label>Opis</Form.Label>
              <Form.Control
                type='text'
                placeholder='Wpisz opis'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

          <Button type='submit' variant='primary'>
            Dodaj
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ProductCreateScreen;
