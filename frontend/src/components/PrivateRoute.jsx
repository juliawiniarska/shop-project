<<<<<<< HEAD
import { Navigate, Outlet, useLocation } from 'react-router-dom';
=======
import { Navigate, Outlet } from 'react-router-dom';
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
<<<<<<< HEAD
  const location = useLocation();

  const guestAccessibleRoutes = ['/shipping', '/payment', '/placeorder'];
  const isGuestAccess = guestAccessibleRoutes.includes(location.pathname) && new URLSearchParams(location.search).get('guest') === 'true';

  return userInfo || isGuestAccess ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
=======
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
