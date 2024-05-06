import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';
import { calcPrices } from '../utils/calcPrices.js';

<<<<<<< HEAD
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, discountCode, guestInfo } = req.body;

  if (!orderItems || orderItems.length === 0) {
=======


const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;

  if (orderItems && orderItems.length === 0) {
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    res.status(400);
    throw new Error('No order items');
  } else {
    const itemsFromDB = await Product.find({
<<<<<<< HEAD
      _id: { $in: orderItems.map(item => item._id) },
    });

    const dbOrderItems = orderItems.map(itemFromClient => {
      const matchingItemFromDB = itemsFromDB.find(
        itemFromDB => itemFromDB._id.toString() === itemFromClient._id
      );
      if (!matchingItemFromDB) {
        throw new Error(`Product not found: ${itemFromClient._id}`);
      }
=======
      _id: { $in: orderItems.map((x) => x._id) },
    });

    const dbOrderItems = orderItems.map((itemFromClient) => {
      const matchingItemFromDB = itemsFromDB.find(
        (itemFromDB) => itemFromDB._id.toString() === itemFromClient._id
      );
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      return {
        ...itemFromClient,
        product: itemFromClient._id,
        price: matchingItemFromDB.price,
        _id: undefined,
      };
    });

<<<<<<< HEAD
    let { itemsPrice, taxPrice, shippingPrice, totalPrice } = calcPrices(dbOrderItems);

    if (discountCode === 'MAJ20') {
      const discountPercentage = 0.2;
      totalPrice *= (1 - discountPercentage);
    }

    const order = new Order({
      orderItems: dbOrderItems,
      user: req.user ? req.user._id : null, 
      guestInfo: !req.user ? guestInfo : null, 
=======
    const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
      calcPrices(dbOrderItems);

    const order = new Order({
      orderItems: dbOrderItems,
      user: req.user._id,
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
<<<<<<< HEAD
      discountCode,
    });

    const createdOrder = await order.save();
=======
    });

    const createdOrder = await order.save();

>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    res.status(201).json(createdOrder);
  }
});


<<<<<<< HEAD


=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});


const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    await Promise.all(order.orderItems.map(async (item) => {
      const product = await Product.findById(item.product);
      if (product) {
        product.countInStock -= item.qty;
        await product.save();
      }
    }));

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});


const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});


const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};