import express from "express";
import __dirname from "../utils.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
});

router.get('/services',(req,res)=>{
   res.sendFile(`${__dirname}/public/services.html`)
})

router.get('/products',(req,res)=>{
    res.sendFile(`${__dirname}/public/products.html`)
})

router.get('/contact',(req,res)=>{
    res.sendFile(`${__dirname}/public/contact.html`)
})

export default router;