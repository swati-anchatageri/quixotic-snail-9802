const express=require("express");
const { connection } = require("./db");
const {propertyRouter}=require("./routes/property.route");
const { userRouter } = require("./routes/user.route");
const { adminRoutes } = require("./routes/admin.routes");
const { orders } = require("./controller/paymentController");
const { verify } = require("jsonwebtoken");

const cors=require("cors")
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

app.use("/property",propertyRouter);
app.use("/users",userRouter)
app.use("/admins",adminRoutes)
app.post("/orders",orders)
app.post("/verify",verify);
app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log("Server is running in port 8000")
    }catch(err){
        console.log(err)
    }
})