import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;


  if (!token) {
    console.error('No token provided');
    if (req.path === '/api/orders' && req.method === 'POST') {
      console.log('Allowing guest order placement');
      return next();
    }
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password');
    console.log('Token decoded successfully');
    next();
  } catch (error) {
    console.error('Token verification failed:', error.message);
    res.status(401);
    throw new Error('Not authorized, token failed');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export { protect, admin };
