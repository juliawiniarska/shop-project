import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from '../../slices/productsApiSlice';
import { useGetCategoriesQuery } from '../../slices/categoriesApiSlice';
import { useGetBrandsQuery } from '../../slices/brandsApiSlice';

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery();

  const { data: brands, isLoading: isLoadingBrands } = useGetBrandsQuery();


  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      }).unwrap(); 
<<<<<<< HEAD
      toast.success('Produkt zaktualizowany');
=======
      toast.success('Product updated');
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      refetch();
      navigate('/admin/productlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
<<<<<<< HEAD
        Wróć
      </Link>
      <FormContainer>
        <h1>Edytuj produkt</h1>
=======
        Go back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        {loadingUpdate && <Loader />}
        {isLoading || isLoadingCategories || isLoadingBrands ? ( 
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
<<<<<<< HEAD
              <Form.Label>Nazwa</Form.Label>
              <Form.Control
                type='name'
                placeholder='Wpisz nazwę'
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

            <Form.Group controlId='image'>
<<<<<<< HEAD
              <Form.Label>Obraz</Form.Label>
              <Form.Control
                type='text'
                placeholder='Wpisz url obrazu'
=======
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                value={image}
                onChange={(e) => setImage}
              ></Form.Control>
              <Form.Control
<<<<<<< HEAD
                label='Wybierz plik'
=======
                label='Choose File'
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                onChange={uploadFileHandler}
                type='file'
              ></Form.Control>
              {loadingUpload && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand'>
<<<<<<< HEAD
              <Form.Label>Firma</Form.Label>
=======
              <Form.Label>Brand</Form.Label>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              <Form.Select
                value={brand} 
                onChange={(e) => setBrand(e.target.value)}
              >
                {brands.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
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
=======
              <Form.Label>Category</Form.Label>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              <Form.Select
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>


            <Form.Group controlId='description'>
<<<<<<< HEAD
              <Form.Label>Opis</Form.Label>
=======
              <Form.Label>Description</Form.Label>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type='submit'
              variant='primary'
              style={{ marginTop: '1rem' }}
            >
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

export default ProductEditScreen;