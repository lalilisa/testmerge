const express = require('express')
require('isomorphic-fetch')
const redis = require('redis')
const router = express.Router()
const client = redis.createClient({
    host:'loacalhost',
    port:6379
})




router.get('/',async(req, res)=>{
            res.send("Hello World")
})

module.exports = router