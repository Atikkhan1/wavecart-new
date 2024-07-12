const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    email: String,
    phone: Number,
    image: String,
    username: String,
    password: String,
    productData: {
      inCart: Array,
      placedOrder: Array,
      pendingOrder: Array,
      completedOrder: Array
    },
    address: {
      country: String,
      state: String,
      city: String,
      pincode: String,
      street: String
    }
  })
mongoose.models = {}
export default mongoose.model("accounts", accountSchema)