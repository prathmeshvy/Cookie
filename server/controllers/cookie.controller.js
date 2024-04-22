const Cookie = require('../models/cookie.model.js');

const getCookie = async (req,res)=>{
    try {
        const cookie =  await Cookie.find({}); 
        res.status(200).json(cookie);
       } catch (error) {
         res.send(500).json({message:error.message});
       }
}

const createCookie = async(req,res)=>{
    try {
        const cookie = await Cookie.create(req.body);
        res.status(200).json(cookie);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports ={
    getCookie,
    createCookie,
};