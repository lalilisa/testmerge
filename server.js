const express = require('express')
require('isomorphic-fetch')
const redis = require('redis')
const router = express.Router()
const client = redis.createClient({
    host:'locahost',
    port:6379
})

router.get('/home',async(req, res)=>{
    res.send("Hello")
})


router.get('/',async(req, res)=>{
            res.send("Hello")
})

module.exports = router