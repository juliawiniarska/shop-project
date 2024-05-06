import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();

  const guestAccessibleRoutes = ['/shipping', '/payment', '/placeorder'];
  const isGuestAccess = guestAccessibleRoutes.includes(location.pathname) && new URLSearchParams(location.search).get('guest') === 'true';

  return userInfo || isGuestAccess ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
