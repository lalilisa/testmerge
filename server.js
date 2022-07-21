const express = require('express')
require('isomorphic-fetch')
const redis = require('redis')
const router = express.Router()
const client = redis.createClient({
    host:'127.0.0.1',
    port:6379
})




router.get('/',async(req, res)=>{
            res.send("Hello")
})

module.exports = router