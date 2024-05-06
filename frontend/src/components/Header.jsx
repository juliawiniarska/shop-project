import React from 'react'
import {Badge, Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/loggg.png';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from './SearchBox';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
    const {cartItems} = useSelector((state) => state.cart);
    const {userInfo} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        dispatch(resetCart());
        navigate('/login');
        } catch (err) {
        console.error(err);
        }
    };
  return (
    <header>
<Navbar style={{ backgroundColor: '#ffe8de' }} variant='light' expand='md' collapseOnSelect>
            <Container>
                <LinkContainer to ='/'>
                <Navbar.Brand>
                    <img src={logo} alt='' style={{ width: '', height: '100px' }} /> 
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <SearchBox />
                        <LinkContainer to ='/cart'>
                        <Nav.Link >
<<<<<<< HEAD
                            <FaShoppingCart /> Koszyk 
=======
                            <FaShoppingCart /> Cart 
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                            {
                            cartItems.length > 0 && (
                            <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                            {cartItems.reduce((a, c) => a + c.qty, 0)}
                            </Badge>
                            )
                            }
                            </Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
<<<<<<< HEAD
                                    <NavDropdown.Item>Profil</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Wyloguj
=======
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Log out
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to ='/login'>
                            <Nav.Link href='/login'>
<<<<<<< HEAD
                                <FaUser /> Zaloguj się 
=======
                                <FaUser /> Log in 
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                                </Nav.Link>
                            </LinkContainer>
                        ) }
                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenu'>
                                <LinkContainer to='/admin/orderlist'>
<<<<<<< HEAD
                                <NavDropdown.Item>Zamówienia</NavDropdown.Item>
                            </LinkContainer>
                                <LinkContainer to='/admin/productlist'>
                            <NavDropdown.Item>Produkty</NavDropdown.Item>
                                </LinkContainer>
                            <LinkContainer to='/admin/categorylist'>
                            <NavDropdown.Item>Kategorie</NavDropdown.Item>
                                </LinkContainer>
                            <LinkContainer to='/admin/brandlist'>
                            <NavDropdown.Item>Firmy</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Użytkownicy</NavDropdown.Item>
=======
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                                <LinkContainer to='/admin/productlist'>
                            <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                            <LinkContainer to='/admin/categorylist'>
                            <NavDropdown.Item>Categories</NavDropdown.Item>
                                </LinkContainer>
                            <LinkContainer to='/admin/brandlist'>
                            <NavDropdown.Item>Brands</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
                            </LinkContainer>
                            </NavDropdown>
                            
              )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header;