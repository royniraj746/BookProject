const express=require("express");
require("dotenv").config();
const app=express();

//middeleware of json folder 

app.use(express.json());

const Port=process.env.PORT || 8000 


//import and mount routes 
 const routesUser=require("./routes/BookRoutes")
//mount here 
 app.use("/api/v1" ,routesUser);


//import here dataBAse 
const {DBConnect}=require("./config/dataBase")
DBConnect();

//run server 
app.listen(Port ,()=>{
    console.log(`server is runing at port${Port}`);
})

app.get("/" ,(req ,res)=>{
    res.send(`<h1>I am Runing RIgth Now</h1>`);
})