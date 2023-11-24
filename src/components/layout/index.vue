<template>
  <div class="main">
    <div class="sidebar">
        <div class="title">
            <div class="logo">
                <span>W</span>
                <span>X</span>
                <span>J</span>
            </div>
            <div class="notice">
                <!-- <i class="el-icon-bell"></i> -->
                <el-badge :value="12" class="item">
                    <router-link to="/news"><i class="el-icon-bell"></i></router-link>
                </el-badge>
            </div>
        </div>
        <div class="controller">
            <div class="position">
                <i class="el-icon-position"></i>
            </div>
            <div class="user">
                <i class="el-icon-user"></i>
            </div>
            <div class="search">
                <i class="el-icon-search"></i>
            </div>
            <div class="place">
                <i class="el-icon-place"></i>
            </div>
            <div class="check-grid">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
                </svg>
            </div>
        </div>
    </div>
    <div class="mainboard">
        <div class="dashboards">
            <div class="inbox">
                <div class="icon-inbox">
                    <i class="el-icon-sold-out"></i>
                </div>
                <div class="icon-inbox">Inbox</div>
            </div>
            <div class="schedule">
                <div>
                    <i class="el-icon-alarm-clock"></i>
                </div>
                <div class="myweek" @click="handleToWeek">
                    MY WEEK
                </div>
            </div>
            <div class="Bboards">
                <div class="boards">
                    <div>
                        <i class="el-icon-c-scale-to-original"></i>
                    </div>
                    <div>
                        Boards
                    </div>
                    <div class="plus">
                        <i class="el-icon-circle-plus"></i>
                    </div>
                </div>
                <div class="input-search">
                    <el-input
                        placeholder="Search board..."
                        suffix-icon="el-icon-finished"
                        v-model="searchInputValue">
                    </el-input>
                </div>
                <div class="router-bar">
                    <div class="routers" v-for="(item,index) in routers" :key="index">
                        <router-link :to="item.path">{{item.title}}</router-link>
                    </div>
                </div>
            </div>
            <div class="dashboard">
                <i class="el-icon-menu"></i>
                <span>Dashboards</span>
            </div>
        </div>
        <div class="router-board">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            searchInputValue:"",
            routers:[
                {
                    title:"merchandise",
                    path:"/merchandise"
                },
                {
                    title: "china map",
                    path: '/map'
                }
            ]
        }
    },
    props:{

    },
    methods:{
        handleToWeek(){
            this.$router.push('/weekly')
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    height: 100%;
    background: #282e4c;
    position: absolute;
    display: flex;
}
.sidebar{
    // width: 10%;
    width: 100px;
    height: 100%;
    color: #000;
    position: relative;
    color: #fff;
    font-size: 25px;
    left: 37px;
    // margin: 0 auto;
    div{
        margin: 40px 0px;
        i{
            cursor: pointer;
        }
        svg{
            cursor: pointer;
            left: 40px;
        }
    }
}
.controller{
    width: 100%;
    position: relative;
    top: 270px;
}
.logo{
    position: relative;
    left: -10px;
}
.logo span:first-child{
    color: #ff3d57;
}
.logo span:nth-child(2){
    color: #ffcb00;
}
.logo span:nth-child(3){
    color: #01d648;
}
.mainboard{
    width: calc(100% - 100px);
    height: 100%;
    background: #fff;
    border-radius: 10px 0px 0px 0px;
    display: flex;
}
.dashboards{
    width: 200px;
    height: 100%;
    padding: 0px 0px 0px 20px;
}
.inbox, .schedule{
    display: flex;
    margin: 20px 0px;
    border-bottom: 1px solid #b8b8b8;
    padding: 10px 0px;
    font-size: 19px;
    i{
        font-size: 25px;
        margin-right: 10px;
    }
}

.Bboards{
    height: calc(100% - 255px);
    width: 100%;
    border-bottom: 1px solid #b8b8b8;
    // display: flex;
    // justify-content: space-between;
    font-size: 19px;
    .boards{
        display: flex;
        i{
            margin-right: 10px;
            font-size: 25px;
            cursor: pointer;
        }
        .el-icon-circle-plus{
            color: #0099ff;
            cursor: pointer;
            margin-left: 60px;
        }
    }
    .input-search{
        width: 80%;
        margin: 10px 0px;
    }
}
.dashboard{
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 19px;
    i{
        font-size: 25px;
        margin-right: 10px;
    }
}
.router-board{
    width: calc(100% - 220px);
    border-left: 1px solid #b8b8b8;
}
.router-bar{
    .routers{
        width: 150px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background: #d5ebff;
        margin: 10px 0px;
    }
    a{
        text-decoration: none;
        color: #0099ff;
        padding: 10px;
    }
}
.notice{
    a{
        text-decoration: none;
        color: #fff;
    }
}
.myweek{
    cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
} 
</style>