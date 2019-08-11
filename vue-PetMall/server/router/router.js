//后端路由
module.exports = app => {
    console.log("start....")
    const express = require('express')
    const router = express.Router()
    const User = require('../models/sign')

    router.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');

        next();
    });
    //创建
    router.get('/user', async(req, res) => {

        const model = await User.create(req.query)
        res.send(model)
    })
    app.use('/admin/api', router)
}