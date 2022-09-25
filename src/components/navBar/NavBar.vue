<template>
  <van-nav-bar
    :title='title'
    :fixed='fixed'
    :right-text='rightText'
    :left-text='leftText'
    :left-arrow='leftArrow'
    @click-left="onClickLeft"
    @click-right="onClickRight"
    :left-url='leftUrl'
    :right-url='rightUrl'
    :z-index=999
  >
    <van-icon v-if='showRightIcon' :name="rightIcon" slot="right" :info="rightIconinfo" />
    <van-icon v-else-if='showRightIcondianhua' :name="rightIcon" slot="right" />
    <van-icon v-if='showLeftIcon' :name="leftIcon" slot="left">{{leftText}}</van-icon>
    <!--<van-icon v-if='showxiaoxi' name="xiaoxi" slot="right" info="5" color="#fff"/>-->
    <!--<van-icon v-if='showquestion' name="question" slot="right" color="#fff"/>-->
  </van-nav-bar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String
    },
    fixed: {
      type: Boolean,
      default: false
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    leftObject: {
      type: Object
    },
    rightObject: {
      type: Object
    },
    rightText: {
      type: String
    },
    leftText: {
      type: String
    },
    leftUrl: {
      type: String
    },
    rightUrl: {
      type: String
    },
    rightIcon: {
      type: String
    },
    leftIcon: {
      type: String
    },
    showRightIcon: {
      type: Boolean,
      default: false
    },
    showLeftIcon: {
      type: Boolean,
      default: false
    },
    showRightIcondianhua: {
      type: Boolean,
      default: false
    },
    showxiaoxi: {
      type: Boolean,
      default: false
    },
    showquestion: {
      type: Boolean,
      default: false
    },
    phone: {
      type: String
    }
  },
  data () {
    return {
      rightIconinfo: ''
    }
  },
  watch: {
    rightIconinfo (val) {
      if (val === 0) {
        this.rightIconinfo = ''
      }
    }
  },
  created () {

  },
  methods: {
    onClickLeft () {
      this.$emit('onClickLeft')
      this.$router.push({name: this.leftUrl, query: this.leftObject})
    },
    onClickRight () {
      if (this.showRightIcondianhua === true) {
        location.href = 'tel:' + this.phone
      } else {
        this.$router.push({name: this.rightUrl, query: {'fromData': this.objectToString(this.rightObject)}})
      }
      this.$emit('onClickRight')
    },
    objectToString (Object) {
      if (Object) {
        return JSON.stringify(Object)
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.van-nav-bar{
  width: 100%;
}
  .van-hairline--bottom::after{
    border-bottom-width: 0
  }
  >>>.van-icon{
    color: #333
  }
  >>>.van-nav-bar__title{
    color: #333
  }
  >>>.van-nav-bar__text{
    color: #333
  }
  .van-nav-bar{
    position: fixed!important;
    top: 0
    /*background-color unset*/
  }
  .van-icon-xiaoxi{
    margin-top: 4px;
    /*color: #333*/
  }
  .van-icon-xiaoxi:before{
    /*color: #333*/
    line-height: 20px;
    height: 28px;
    font-size: 26px;
  }
  >>>.van-icon__info{
    left: 94%;
    top: -0.3em;
  }
</style>
