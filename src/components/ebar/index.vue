<template>
  <div class="main">
    <div class="bar top">
      <div class="title">MSTORE</div>
      <div class="head-picture">我的</div>
    </div>
    <div class="bar body">
      <div class="left-bar">
        导航
      </div>
      <div class="content-bar">
        <router-view/>
      </div>
      <div class="right-bar">
        <div class="advert"></div>
        <div class="advert"></div>
        <div class="advert"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ebar',
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
.top{
  width: 100%;
  min-width: 1280px;
  height: 48px;
  line-height: 48px;
  background: #ffffff;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
}
.body{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.left-bar{
  width: 10%;
  min-width: 50px;
  min-height: 600px;
  background: #ffffff;
}

.right-bar{
  width: 15%;
  min-width: 80px;
  min-height: 600px;
  // box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  // background-color: #ffffff;
}
.advert{
  width: 90%;
  height: 190px;
  background: #ffffff;
  margin: 0px 5px 5px 5px ;
  border: 2px solid #f0f0f2;
}
</style>