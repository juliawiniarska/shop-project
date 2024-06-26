import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Form, Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
<<<<<<< HEAD
import Loader from '../components/Loader';
import Rating from '../components/Rating';
=======
import Rating from '../components/Rating';
import Loader from '../components/Loader';
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
import Message from '../components/Message';
import Meta from '../components/Meta';
import { useGetProductDetailsQuery, useCreateReviewMutation} from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ProductCarousel from '../components/ProductCarousel';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingProductReview }] =
<<<<<<< HEAD
  useCreateReviewMutation();

  const submitHandler = async (e) => {
  e.preventDefault();

  try {
    await createReview({
      productId,
      rating,
      comment,
    }).unwrap();
    refetch();
    setRating(0);
    setComment('');
  } catch (err) {
    toast.error(err?.data?.message || err.error);
  }
}



  return (<>
  <Link className='btn btn-light my-3' to ='/'>
    Wróć do strony głównej
=======
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success('Review created successfully');
      setRating(0);
      setComment('');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (<>
  <Link className='btn btn-light my-3' to ='/'>
    Return to the homepage
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    </Link>
    {isLoading ? (
        <Loader />
    ) : error ? (
        <Message variant = 'danger'>{error?.data?.message || error.error }</Message>
        ) : (
            <>
            <Meta title={product.name} />
        <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                <Rating 
                  value={product.rating} 
<<<<<<< HEAD
                  text={`${product.numReviews} ${product.numReviews === 0 ? 'opinii' : product.numReviews === 1 ? 'opinia' : product.numReviews < 5 ? 'opinie' : 'opinii'}`} 
                />
                </ListGroupItem>
                <ListGroupItem>Cena: {product.price} zł</ListGroupItem>
                <ListGroupItem>Opis: {product.description}</ListGroupItem>
=======
                  text={`${product.numReviews} ${product.numReviews === 1 ? 'review' : product.numReviews < 5 ? 'review' : 'review'}`} 
                />
                </ListGroupItem>
                <ListGroupItem>Price: zł{product.price}</ListGroupItem>
                <ListGroupItem>Description: {product.description}</ListGroupItem>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <Row>
<<<<<<< HEAD
                            <Col>Cena:</Col>
=======
                            <Col>Price:</Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                            <Col>
                            <strong>{product.price} zł</strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
<<<<<<< HEAD
                            <strong>{product.countInStock > 0 ? 'Dostępne' :
                            'Niedostepne'}</strong>
=======
                            <strong>{product.countInStock > 0 ? 'Available' :
                            'Unavailable'}</strong>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                            </Col>
                        </Row>
                    </ListGroupItem>
                    {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
<<<<<<< HEAD
                        <Col>Ilość</Col>
=======
                        <Col>Quantity</Col>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}>
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                    <ListGroupItem>
                        <Button className="btn-block"
                            type='button'
                            disabled={product.countInStock === 0}
                            onClick={addToCartHandler}
                        >
<<<<<<< HEAD
                            Dodaj do koszyka
=======
                            Add to cart
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    <Row className='review'>
    <Col md={6}>
<<<<<<< HEAD
              <h2>Opinie</h2>
=======
              <h2>Reviews</h2>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
              {product.reviews.length === 0 && <Message>Brak opinii</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
<<<<<<< HEAD
                  <h2>Napisz opinię</h2>
=======
                  <h2>Write a review</h2>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

                  {loadingProductReview && <Loader />}

                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group className='my-2' controlId='rating'>
<<<<<<< HEAD
                        <Form.Label>Opinia</Form.Label>
=======
                        <Form.Label>Rating</Form.Label>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                        <Form.Control
                          as='select'
                          required
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
<<<<<<< HEAD
                          <option value=''>Wybierz...</option>
=======
                          <option value=''>Choose...</option>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className='my-2' controlId='comment'>
<<<<<<< HEAD
                        <Form.Label>Komentarz</Form.Label>
=======
                        <Form.Label>Comment</Form.Label>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                        <Form.Control
                          as='textarea'
                          row='3'
                          required
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type='submit'
                        variant='primary'
                      >
<<<<<<< HEAD
                        Dodaj
=======
                        Submit
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                      </Button>
                    </Form>
                  ) : (
                    <Message>
<<<<<<< HEAD
                      <Link to='/login'>Zaloguj się</Link> aby dodać opinię
=======
                      <Link to='/login'>Log in</Link> to write a review
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
<<<<<<< HEAD

</Row>
    <ProductCarousel />
=======
          
    </Row>
    <ProductCarousel />

>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    </>
    )}
  </>
  );
};

export default ProductScreen;