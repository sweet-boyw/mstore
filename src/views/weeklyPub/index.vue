<template>
  <div class="weekly">
    <div class="title">
        weekly publication
    </div>
    <div class="container">
        <div class="cards">
            <div class="card">1</div>
            <div class="card">2</div>
            <div class="card">3</div>
            <div class="card">4</div>
        </div>
        <div class="line-note">
            <div class="linebar" ref="linebbar"></div>
            <div class="note">
                <div class="title">公告</div>
                <div class="context">
                    <p>关于国庆中秋放假通知：</p>
                    <p>一、国庆、中秋假期9.28-10.6，请各位师生于10.7之前返校，不要耽误当天课程安排。</p>
                    <p>二、放假期间请各位师生注意出行安全，保护好个人安全，离校前收拾好个人寝室卫生，关闭门窗和电闸。</p>
                    <p>祝大家假期快乐！！！</p>
                </div>
            </div>
        </div>
        <div class="weekly-table">
            
        </div>
    </div>
  </div>
</template>

<script>
import {createLineBar} from "@/utils/echarts"
export default {
    data(){
        return{

        }
    },
    mounted(){
        let dom = this.$refs.linebbar
        createLineBar(dom)
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar{
    display: none;
}
.weekly{
    width: 100%;
    height: 100%;
}
.title{
    height: 65px;
    line-height: 65px;
    width: 100%;
    font-size: 29px;
    border-bottom: 1px solid #b8b8b8;
    z-index: 10;
}
.container{
    width: 100%;
    height: 76.1%;
    min-height: 400px;
    border-bottom: 1px solid #b8b8b8;
    padding: 20px;
}
.linebar{
    width: 70%;
    min-width: 400px;
    height: 500px;
}
.cards{
    display: flex;
}
.cards div{
    width: 180px;
    height: 100px;
    flex-grow: 1;
    border: 1px solid #b8b8b8;
    margin: 0px 60px 10px 0px;
    padding: 5px;
}
.line-note{
    display: flex;
}
.note{
    width: 300px;
    height: 480px;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid #b8b8b8;
}
.context{
    z-index: 1;
    height: 200px;
    overflow: hidden;
}
</style>