import mongoose from "mongoose"
import account from "/app/api/models/accountSchema"

export async function POST(req){
    let param = await req.json()
    let accountId = param.accountId
    let productId = param.productId

    await mongoose.connect(process.env.MONGO_URI)
    const cart =  await account.findById(accountId)
     await cart.productData.inCart.push(productId)
    await cart.save()
    return new Response(JSON.stringify(cart))
}