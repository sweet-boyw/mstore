<template>
  <div class="news">
    <div class="topbar">
        <div class="logo">
            <logo/>
        </div>
        <div class="bar">
            <div class="front">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        Why Front?
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>dropright</el-dropdown-item>
                        <el-dropdown-item>dropleft</el-dropdown-item> 
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="solutions">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        solutions
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>dropright</el-dropdown-item>
                        <el-dropdown-item>dropleft</el-dropdown-item> 
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="resources">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        resources
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>dropright</el-dropdown-item>
                        <el-dropdown-item>dropleft</el-dropdown-item> 
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="sales">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        sales
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>dropright</el-dropdown-item>
                        <el-dropdown-item>dropleft</el-dropdown-item> 
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="pricing">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        pricing
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>dropright</el-dropdown-item>
                        <el-dropdown-item>dropleft</el-dropdown-item> 
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="login">
                <router-link to="/login">log in</router-link>
            </div>
            <div class="free">
                <el-button class="freebtn" @click="handlefree">Start your free trial now</el-button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="classify">
            <div class="company-news">
                <router-link to="/">company news</router-link>
            </div>
            <div class="customs-service">
                <router-link to="/">customs service</router-link>
            </div>
            <div class="productivity">
                <router-link to="/">productivity</router-link>
            </div>
            <div class="teamwork">
                <router-link to="/">teamwork</router-link>
            </div>
            <div class="innovation">
                <router-link to="/">innovation</router-link>
            </div>
        </div>
        <div class="latest-title">
            <span>LATEST POSTS</span>
        </div>
        <div class="posts-cards">
            <div class="message-list">
                <div class="list" v-for="item in 6" :key="item">
                    <posts-card></posts-card>
                </div>
            </div>
            <div class="recommoned-list">
                11111111
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import logo from '@/components/logo'
import postsCard from '@/components/postsCard'
export default {
    components:{
        'logo': logo,
        'posts-card': postsCard
    }, 
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{
        handlefree(){

        }
    }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar{
    display: none;
}
.news{
    width: 100%;
    // height: 100%;
    position: absolute;
    background: #f7f7f7;
}
.topbar{
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 120px;
    background: #fff;
    position:sticky;
    top: 0;
    display: flex;
}
.logo{
    width: calc(100% - 1040px);
    font-size: 29px;
    font-weight: 300;
}
.bar{
    display: flex;
    div{
        margin: 0 10px 0px 0px;
    }
}
.el-dropdown-link {
    cursor: pointer;
    color: #202121;
  }
  .el-icon-arrow-down {
    font-size: 17px;
    color: #b1b1b1;
  }
  .el-dropdown{
    font-size: 18px;
  }
  .login{
    a{
        text-decoration: none;
        color: #202121;
    }
  }
  .freebtn{
    border-radius: 20px;
    color: #fff;
    background: #6488cc;
  }
  .container{
    width: calc(100% - 240px);
    margin: 0px 120px;
  }
  .classify{
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    // margin: 0px 120px;
    border-bottom: 1px solid #b1b1b1;
    div{
        font-size: 20px;
        margin: 0px 20px 0px 0px;
    }
    a{
        text-decoration: none;
        color: #b1b1b1;
    }
  }
  .latest-title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
  }
  .posts-cards{
    width: 100%;
    display: flex;
    .list{
        width: 100%;
        height: 260px;
        margin: 20px 0;
    }
  }
  .message-list{
    width: 67%;
  }
  .recommoned-list{
    width: 33%;
  }
</style>