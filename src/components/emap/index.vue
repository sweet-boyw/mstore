<template>
    <div class="emap">
        {{  message  }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:''
        }
    },
    props:{
        msg:{
            type:String,
        }
    },
    created(){
        this.message = this.msg
    }
}
</script>

<style lang="scss" scoped>

</style>