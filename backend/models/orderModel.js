import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
      ref: 'User', 
      required: function() { return !this.guestInfo; },
=======
      required: true,
      ref: 'User',
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
<<<<<<< HEAD
    discountCode: { 
      type: String
    },
    guestInfo: {
      name: { type: String },
      email: { type: String }
    }
=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

<<<<<<< HEAD
export default Order;
=======
export default Order;
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
