/**
 * node后端服务
 * cors解决跨域问题
 * mysql 连接数据库
 */
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
app.use(cors());
const port = 3000;

// hello
app.get('/hello', (req, res) => {
    res.json({ message: '请求成功' })
    console.log(0)
})

app.listen(port, () => {
    console.log("应用正在监听端口" + port);
})