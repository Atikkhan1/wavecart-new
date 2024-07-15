
import { data } from "autoprefixer";
import accounts from "/app/api/models/accountSchema";
import mongoose from "mongoose";
export async function POST(req) {
    let param = await req.json()
    let email = param.email
    let password = param.password
  
    await mongoose.connect(process.env.MONGO_URI)
    let isExist = await accounts.exists({email:email})
    let res = ''
    let products = await accounts.find({email:email})
    if (isExist){
        res = products[0]["password"] == password? true:"password incorrect"
    } else{
        res = "email not found"
    }
  return new Response(JSON.stringify({res:res,data:products}))
}
