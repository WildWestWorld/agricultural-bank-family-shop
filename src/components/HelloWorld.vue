<template>
  <div>
    123
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  //变量区
  data(){
    return{
      test:"123"
    }
  },
  //生命周期区
  mounted(){
    console.log(this.$store)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
