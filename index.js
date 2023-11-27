const express=require("express");
const app=express();

app.get("/home", (req,resp)=>{
  resp.send("this is harinadh.......");


})

app.listen(2020,()=>{
console.log("port running on the 2020");

})
