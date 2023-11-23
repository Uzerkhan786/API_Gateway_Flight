const express=require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app=express();

app.use('/bookingservice',createProxyMiddleware({target:'http://localhost:3002',changeOrigin:true}))

app.get('/home',async(req,res)=>{
    res.json({
        data:'hi'
    })
})
app.listen(3000,()=>{
    console.log('something is runnin on port 3000');
})