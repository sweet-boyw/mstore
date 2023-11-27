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
const mysql = require('mysql');
const app = express();
app.use(cors()); // 解决跨域
app.use(express.json());
app.use(cookieParser());
const port = 3000;

// 测试服务是否成功
// hello
app.get('/hello', (req, res) => {
    res.json({ message: '请求成功' })
    console.log(0)
})

// 连接本地mysql
const connnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '******',
    database: 'db01'
})

// // 数据库连接
connnection.connect((err) => {
    if (err) throw err;
    console.log("数据库连接成功");
})

// 注册接口
app.post('/register', async (req, res) => {
    console.log("进入接口")
    try {
        // console.log(req, res)
        const { username, password } = req.body;
        console.log(username, password)
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (username, password) VALUES (?,?)";
        connnection.query(query, [username, hashedPassword], (err, result) => {
            if (err) throw err;
            // 此处数据插入失败
            /**
             * users表可能与字段对应不上
             * 导致插入数据失败
             * 重新建一个表
             */
            console.log
            res.status(201).send('注册成功');
        })
    } catch (error) {
        console.log("前端请求失败")
        res.status(500).send(error.message)
    }
})

app.listen(port, () => {
    console.log("应用正在监听端口" + port);
})