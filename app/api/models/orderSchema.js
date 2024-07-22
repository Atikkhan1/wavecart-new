const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:Object,
    link:String,
    contact:String,
    size:String,
    quantity:Number,
    status:String,
    total_price:String,
    payment_method:String,
    delivery_charges:Number,
    orginal_price:Number,
    order_price:Number,
    order_date:String,
    product:Object,
    address:{
      house_no:String,
      area:String,
      city:String,
      nearby:String,
      pincode:String,
      state:String
    }})
mongoose.models = {}
export default mongoose.model("orders", orderSchema)