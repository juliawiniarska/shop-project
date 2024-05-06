import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { setGuestInfo } from '../slices/cartSlice';

const GuestInfoScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setGuestInfo({ name, email }));
        console.log('Guest info set:', { name, email }); 
        navigate('/shipping');
      };
      

    return (
        <FormContainer>
            <h1>Informacje Gościa</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Imię</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Wpisz swoje imię'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Wpisz swój email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Kontynuuj
                </Button>
            </Form>
        </FormContainer>
    );
};

export default GuestInfoScreen;
