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
<<<<<<< HEAD
      toast.success('Zdjęcie zostało załadowane');
    } catch (error) {
      console.error(error);
      toast.error('Zdjęcie nie zostało załadowane');
=======
      toast.success('The image has been uploaded');
    } catch (error) {
      console.error(error);
      toast.error('Failed to upload the image');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
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
<<<<<<< HEAD
      toast.error('Produkt nie został dodany.: ' + error.data?.message || 'Error');
=======
      toast.error('Failed to add the product.: ' + error.data?.message || 'Error');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    }
  };
  
  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
<<<<<<< HEAD
        Wróć
      </Link>
      <FormContainer>
        <h1>Dodaj Produkt</h1>
=======
        Go Back
      </Link>
      <FormContainer>
        <h1>Add Product</h1>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        {isLoadingCreate && <Loader />}
        {isLoadingCategories && <Loader />}
        {isLoadingBrands && <Loader />}
        <Form onSubmit={submitHandler}>

          <Form.Group controlId='name'>
<<<<<<< HEAD
            <Form.Label>Nazwa</Form.Label>
            <Form.Control
              type='text'
              placeholder='Wpisz nazwę'
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

          <Form.Group controlId='price'>
<<<<<<< HEAD
              <Form.Label>Cena</Form.Label>
              <Form.Control
                type='number'
                placeholder='Wpisz cenę'
=======
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='brand'>
            <Form.Select value={brand} onChange={(e) => setBrand(e.target.value)}>
<<<<<<< HEAD
              <option value=''>Wybierz...</option>
=======
              <option value=''>Choose...</option>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              {brands?.map((b) => (
                <option key={b._id} value={b._id}>
                  {b.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

            <Form.Group controlId='countInStock'>
<<<<<<< HEAD
              <Form.Label>Ilość</Form.Label>
              <Form.Control
                type='number'
                placeholder='Wpisz ilość'
=======
              <Form.Label>Count in stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter count in stock'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

          <Form.Group controlId='category'>
<<<<<<< HEAD
            <Form.Label>Kategoria</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value=''>Wybierz...</option>
=======
            <Form.Label>Category</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value=''>Choose...</option>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId='image'>
<<<<<<< HEAD
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
=======
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter image url'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.Control type='file' label='Choose File' custom onChange={uploadFileHandler}></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

          <Button type='submit' variant='primary'>
<<<<<<< HEAD
            Dodaj
=======
            Add
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ProductCreateScreen;
