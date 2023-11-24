<template>
  <div class="map">
      <e-map :msg="hello"></e-map>
  </div>
</template>

<script>
import emap from "@/components/emap"
export default {
    data(){
        return{
          hello:"hello"
        }
    },
    components:{
      "e-map": emap
    }
}
</script>

<style lang="scss" scoped>

</style>