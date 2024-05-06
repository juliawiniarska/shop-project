import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
<<<<<<< HEAD
            <Nav.Link>Logowanie</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Logowanie</Nav.Link>
=======
            <Nav.Link>Log in</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Log in</Nav.Link>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
<<<<<<< HEAD
            <Nav.Link>Wysyłka</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Wysyłka</Nav.Link>
=======
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
<<<<<<< HEAD
            <Nav.Link>Płatność</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Płatność</Nav.Link>
=======
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
<<<<<<< HEAD
            <Nav.Link>Zamów</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Zamów</Nav.Link>
=======
            <Nav.Link>Place order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place order</Nav.Link>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;