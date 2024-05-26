// const express=require("express");
// const app=express();

// app.get("/api",(req,res)=>{
//     return res.json({messege:"this is from backend"});
// }
// )
// app.listen(8081,()=>{
//     console.log("listening")
// }

// )
const express = require('express');
const app = express();

// Define a simple API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Express server is running on port 3000');
});
