const nodemailer = require("nodemailer");
export async function POST(req) {
  let param = await req.json()
  let email = param.email
  let otp = Math.floor(Math.random() * 9000 + 1000)
  // let res;

 try{
  const transporter = nodemailer.createTransport({ 
  service:'gmail', 
  host:'smtp.gmail.com',
  port:465,
  secure:false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
  
});
await transporter.sendMail({
    from: 'wavecart.shop@gmail.com', // sender address
    to: email, // list of receivers
    subject: "wavecart verification code", // Subject line
    text: `thank you for chosing our website and giving your time , this is your verification code`,
    html:`<h1>thank you for chosing our website and giving your time , this is your verification code : <h2>${otp}</h2></h1>`
  }, function(error, info){
    if (error) {
      console.log(error)
    } else {
      console.log("message sent to ", email)
    }
  })
}catch(e){
  console.log(e)
}
return new Response(JSON.stringify({otp:otp}))
}
