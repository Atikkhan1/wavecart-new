import Product from "/app/api/models/productSchema";
import mongoose from "mongoose";
export async function GET() {
    await mongoose.connect(process.env.MONGO_URI)

    
      let products = await Product.find({})
      return new Response(JSON.stringify(products));
    
}
  