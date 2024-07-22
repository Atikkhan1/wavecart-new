
import accounts from "/app/api/models/accountSchema";
import mongoose from "mongoose";

export async function POST(req) {
    let details = await req.json()
    let username = details.username
    let phone = details.phone
    let email = details.email
    let password = details.password
    
    await mongoose.connect(process.env.MONGO_URI)
    let isExist = await accounts.exists({email:email})
    let res = ''
    if (isExist){
        res = "email already exist , try diffrent one"
    } else{
        res = true
        await accounts.create({
            email:email,
            username:username,
            phone:phone,
            image:"",
            password:password,
            address:{
                country: "",
                state: "",
                city: "",
                pincode: "",
                street: ""
            }
        })
    }
    return new Response(JSON.stringify(res))

}
