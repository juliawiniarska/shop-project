import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import {Provider} from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomeScreen } from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import CartScreen from './screens/CartScreen';
<<<<<<< HEAD
import PrivateRoute from './components/PrivateRoute';
=======
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
import ProfileScreen from './screens/ProfileScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import {HelmetProvider} from 'react-helmet-async';
import CategoryScreen from './screens/CategoryScreen';
import CategoryListScreen from './screens/admin/CategoryListScreen';
import ProductCreateScreen from './screens/admin/ProductCreateScreen';
import BrandListScreen from './screens/admin/BrandListScreen';
import UserCreateScreen from './screens/admin/UserCreateScreen';
import CategoryCreateScreen from './screens/admin/CategoryCreateScreen';
import CategoryEditScreen from './screens/admin/CategoryEditScreen';
import BrandCreateScreen from './screens/admin/BrandCreateScreen';
import BrandEditScreen from './screens/admin/BrandEditScreen';
import BrandScreen from './screens/BrandScreen';
<<<<<<< HEAD
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ShippingScreen from './screens/ShippingScreen';
import GuestInfoScreen from './screens/GuestInfoScreen';
=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<App />}>
      <Route index = {true} path = '/' element={<HomeScreen />} />
      <Route path = '/search/:keyword' element={<HomeScreen />} />
      <Route path="/category/:category" element={<CategoryScreen />} />
      <Route path="/brand/:brand" element={<BrandScreen />} />
      <Route path = '/page/:pageNumber' element={<HomeScreen />} />
      <Route path = '/search/:keyword/page/:pageNumber' element={<HomeScreen />} />
      <Route path = '/product/:id' element={<ProductScreen/>} />
      <Route path = '/login' element={<LoginScreen/>} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/cart' element={<ShippingScreen />} />
<<<<<<< HEAD
      <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path="/guest-info" element={<GuestInfoScreen />} />


      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
        
      </Route>

      
=======

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />


      </Route>
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/productlist/:pageNumber'element={<ProductListScreen />}/>
        <Route path='/admin/categorylist'element={<CategoryListScreen />}/>
        <Route path='/admin/categorylist/:pageNumber'element={<CategoryListScreen />}/>
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
        <Route path="/admin/product/create" element={<ProductCreateScreen />} />
        <Route path='/admin/brandlist'element={<BrandListScreen />}/>
        <Route path='/admin/user/create'element={<UserCreateScreen />}/>
        <Route path='/admin/category/create'element={<CategoryCreateScreen />}/>
        <Route path='/admin/category/:id/edit'element={<CategoryEditScreen />}/>
        <Route path='/admin/brand/:id/edit'element={<BrandEditScreen />}/>
        <Route path='/admin/brand/create'element={<BrandCreateScreen />}/>
      </Route>
    
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
    <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
    </PayPalScriptProvider>
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);


reportWebVitals();
