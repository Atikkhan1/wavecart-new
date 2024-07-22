import mongoose from "mongoose"
import account from "/app/api/models/accountSchema"
import order from "/app/api/models/orderSchema"
const nodemailer = require("nodemailer");
export async function POST(req){
    let param = await req.json()
    let data = param.data
    await mongoose.connect(process.env.MONGO_URI)
    let orderData = await order.create(data)

    let user = await account.findById(data.user._id)
    user.productData.pendingOrder.push({data:data,orderId:orderData._id})
    await user.save()


    const transporter = nodemailer.createTransport({ 
        service:'gmail', 
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        },
        tls: {
          rejectUnauthorized: false
        }
        
      });
      
      await new Promise((resolve,reject)=>{
      
        transporter.sendMail({
          from: 'wavecart.shop@gmail.com', // sender address
          to: "khanarbajpathan057@gmail.com", // list of receivers
          subject: "wavecart verification code", // Subject line
          text: `thank you for chosing our website and giving your time , this is your verification code`,
          html:`<h1>hello sir new order recieved , please take a look \n
          <p>${orderData}</p>\n
          
          
          </h1>`
        }, function(error, info){
          if (error) {
            console.log(error)
            reject(error)
          } else {
            console.log("message sent to ", "khanarbajpathan057")
            resolve(info)
          }
        })
      })
      



    return new Response(JSON.stringify(orderData))
}