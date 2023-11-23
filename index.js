const express=require('express');
const rateLimit=require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app=express();
const rate=rateLimit({
    windowMs:15*60*1000,
    limit:5

})
app.use(rate);
app.use('/bookingservice',createProxyMiddleware({target:'http://localhost:3002',changeOrigin:true}))

app.listen(3000,()=>{
    console.log('something is runnin on port 3000');
})