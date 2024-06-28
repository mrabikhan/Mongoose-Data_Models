import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.Schema.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Type.Schema.ObjectId,
      required: true,
    },
    orderItems: {
      type: [orderItemSchema],
      required: true,
    }, //we can do this using a different method with difining a seperate schema as well

    /*
    orderItems:[
      productId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      quantity:{
        type: Number,
        required: true
      }
     ]
    */
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Canceled', 'Delivered'], //enum means choices
      default: 'Pending',
      required: true,
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
