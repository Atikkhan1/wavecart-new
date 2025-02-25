import { error } from "console";
import Product from "/app/api/models/productSchema";
import mongoose from "mongoose";
export async function POST(req) {
  let param = await req.json()
  let key = param.key
  let value = param.value
  try {
    await mongoose.connect(process.env.MONGO_URI)
    let products = await Product.find({[key]:value})
    return new Response(JSON.stringify(products));
  }catch{
    return new Response(JSON.stringify([]))
  }
    
}
  