<template>
  <div class="tab-bar-item-container" @click="navigateToLink" >
    <div class="icon-container">
      <div :class="`icon-img ${info.name}`" :style="{backgroundImage:'url('+info.icon+')'}"></div>
      <!--      <slot name="icon"></slot>-->
      <!--      <img src="@/assets/img/tabbar-index.png">-->
    </div>
    <div class="title-container" :style="{color: activeColor}">{{ info.title }}</div>

  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    info: {
      type: Object,
      value: () => {
        null
      }
    }
  },
  computed: {
      activeColor(){
        let currentPath =this.$route.path
        let navPath=this.$props.info.path
        return currentPath === navPath ? "#00995a":'black';
      }
  },
  data() {
    return {}
  },
  methods:{
    navigateToLink(){
      // this.$router.push('/home')
      // console.log(this.$router)
      let currentPath =this.$route.path
      let navPath=this.$props.info.path

      if(currentPath !== navPath){
        this.$router.replace(navPath)
        // console.log(currentPath,navPath)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar-item-container {
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon-container {
    position: relative;
    height: calc(52/75)+rem;
    width: calc(52/75)+rem;

    display: flex;
    justify-content: center;
    align-items: center;
    .icon-img{
      //width: 100%;
      //height: 100%;
      height: calc(52/75)+rem;
      width: calc(52/75)+rem;

      background-image: url("@/assets/img/tabbar-index.png") ;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .index{
      height: calc(46/75)+rem;
      width: calc(52/75)+rem;
    }
    .sort{
      height: calc(41/75)+rem;
      width: calc(41/75)+rem;
    }
    .mine{
      height: calc(39/75)+rem;
      width: calc(35/75)+rem;
    }
  }

  .title-container {
    margin-top: calc(3.5 / 37.5)+rem;
    font-size: calc(11 / 37.5)+rem;
  }
}
</style>