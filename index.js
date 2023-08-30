const express=require("express");
const connectToMongo=require('./db');
const app= express();
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/posts");
connectToMongo();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.listen(8800,()=>{
    console.log("Backend server is ready")
})