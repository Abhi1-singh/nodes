const express = require('express')
const app =express()
app.get('/api/get',(req,res)=>{
res.send({message:'server is running'})
})
app.get('/api/get_user_details',(req,res)=>{
    res.send({
       user:{
        name:"abhishek",
        age:33,
        contact:12345
       } 
    })
})
app.listen(6666, ()=>{
    console.log('server is running 6666')
})