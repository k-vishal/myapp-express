const express = require('express')
const db= require('../db')
const util= require('../util')


const router=express.Router()

router.get('/', (request, response)=>{
    const connection = db.connect();
    const statement= `select id, title, description, price from product`
    connection.query(statement, (err,data)=>{
        connection.end()
        response.send(util.createResult(err,data))
    })
})

router.post('/', (request, response)=>{
    const {title, description, price}= request.body
    const connection = db.connect();
    const statement= `insert into product(title, description, price) values ( '${title}', '${description}', ${price})`
    connection.query(statement, (err,data)=>{
        connection.end()
        response.send(util.createResult(err,data))
    })
})
module.exports = router

