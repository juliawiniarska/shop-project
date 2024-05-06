import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SubMenu from './components/SubMenu'; 
<<<<<<< HEAD
import TopBanner from './components/TopBaner';
=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <TopBanner />
=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      <Header />
      <SubMenu /> 
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
