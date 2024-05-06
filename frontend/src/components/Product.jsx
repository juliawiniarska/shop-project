import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import '../assets/styles/Product.css';

const Product = ({ product }) => {
    const imageClass = product.countInStock === 0 ? 'card-img-top card-img-unavailable' : 'card-img-top';

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <div className="card-img-top-container">
                    <Card.Img src={product.image} variant='top' className={imageClass} />
                </div>
            </Link>
            <Card.Body className='product-body'>
                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none'}}>
                    <Card.Title as='div' className='product-title'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div' className='product-rating'>
<<<<<<< HEAD
                    <Rating value={product.rating} text={`${product.numReviews} ${product.numReviews === 0 ? 'opinii' : product.numReviews === 1 ? 'opinia' : product.numReviews < 5 ? 'opinie' : 'opinii'}`}  />
=======
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                </Card.Text>
                <Card.Text as='div' className='product-price'>
                    {product.price} zł
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
