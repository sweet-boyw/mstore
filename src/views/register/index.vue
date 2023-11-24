<template>
    <div class="main">
        <div class="box left">
            <h1>欢迎注册</h1>
            <div class="login form">
                <form action="#">
                    <label for="name">账号：</label>
                    <input type="text" name="" id="name" v-model="name">
                    <label for="password">密码：</label>
                    <input type="password" name="" id="password" v-model="password">
                    <label for="password">确认密码：</label>
                    <input type="password" name="" id="pass" v-model="pass">
                    <button @click="register" type="button">立即注册</button>
                </form>
            </div>
            <div class="register">
                <p>已有账号，<router-link to="/login">去登录</router-link></p>
            </div>
        </div>
        <div class="box right">
            <div class="title">
                <img src="../../assets/images/logo.png" alt="">
                <h1>商城系统</h1>
            </div>
            <div class="bmg">
                <p>Please, upgrade your dependencies to the actual version of core-js</p>
                <img src="../../assets/images/login.png" alt="" style="width: 500px;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            checked:true,// 是否勾选
            name:"",// 账户
            password:"",// 密码
            pass:""// 确认密码
        }
    },
    mounted() {

    },
    methods: {
        register(){
            console.log("登录",this.name,this.password)
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    width: 100%;
    height: 100vh;
    background-color: #f2f8fd;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box{
    width: 500px;
    height: 800px;
    border-radius: 0px 10px 10px 0;
}
.right{
    background-color: #3e8dff;
    border-radius: 10px 0 0 10px;
}
.left{
    background: #fff;
    border-radius: 0px 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: #23262f;
    }
    form{
        height: 200px;
        width: 200px;
        display: flex;
        flex-direction: column;
        label{
            color: #888;
            font-size: 15px;
            margin: 5px 0;
        }
        input{
            border: none;
            outline: none;
            height: 20px;
            border-bottom: 1px solid #888;
            font-size: 15px;
        }
        button{
            display:inline-block;
            margin: 10px auto;
            width: 150px;
            height: 50px;
            border: 1px solid #fff;
            border-radius: 5px;
            height: 30px;
            background-color: #3e8dff;
            color: #fff;
        }
    }
    .register{
        display: flex;
        height: 40px;
        line-height: 40px;
        p{
            font-size: 14px;
            margin: 0 5px;
        }
        a{
            text-decoration: none;
            color: #3e8dff;
        }
    }
}
.title{
    width: 100%;
    height: 100px;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    img{
        width: 80px;
        height: 80px;
    }
    h1{
        color: #fff;
        margin-left: 20px;
    }
}
.bmg{
    width: 80%;
    height: 100px;
    p{
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 2;
    margin-left: 100px;
}
}
</style>