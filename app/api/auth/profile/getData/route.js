
import accounts from "/app/api/models/accountSchema";
import mongoose from "mongoose";
export async function POST(req) {
    let params = await req.json()
    let _id = params._id

    await mongoose.connect(process.env.MONGO_URI)

    let getData = await accounts.findById(_id)

    return new Response(JSON.stringify(getData))
}