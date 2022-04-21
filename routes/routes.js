import express from "express";
import __dirname from "../utils.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});

router.get('/services',(req,res)=>{
   res.sendFile(__dirname+'/services.html')
})

router.get('/products',(req,res)=>{
    res.sendFile(__dirname+'/products.html')
})

router.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})

export default router;