import mongoose from "mongoose"
import account from "/app/api/models/accountSchema"

export async function POST(req){
    let param = await req.json()
    let accountId = param.accountId
    let productId = param.productId
    
    await mongoose.connect(process.env.MONGO_URI)
    const user = await account.findById(accountId)
    const cart = user.productData.inCart
    let res;
    for (let i = 0; i < cart.length; i++) {
        if (productId == cart[i]._id){
            res = cart[i]
        }
    }
    await cart.remove(res)
    await user.save()
    return new Response(JSON.stringify(res))
}