<template>
  <div class="page-wrapper">
    <div class="header">
      <!-- 导航栏 -->
      <!-- <div class="total-nav-container">
          <div class="iphone-info-container"></div>
  
          <div class="nav-container">
            <div class="nav-wrapper">
              <div class="nav-img-container">
                <div class="nav-img"></div>
              </div>
              <div class="nav-text-container">公司简介</div>
            </div>
          </div>
        </div> -->
      <JKNavigator title="商家登录"></JKNavigator>
    </div>
    <div class="content">
      <!-- 验证码弹出框 -->
      <van-dialog
        v-model="showVerificationCodeModal"
        title="请输入图形验证码"
        show-cancel-button
        @open="openCodeModal"
        @confirm="sendVerificationMessage"
      >
        <!-- 图形验证码输入 -->
        <div class="img-code-container">
          <div class="left-icon-container">
            <div class="icon-img"></div>
          </div>
          <div class="input-container">
            <input
              type="phone"
              class="verification-code-input"
              placeholder="请输入验证码"
              v-model="form.pngCode"
            />
            <div
              class="sent-verification-code-btn"
              @click="getVerificationCodeImg()"
            >
              <div class="btn-text">
                <img
                  v-if="verificationCodeImgBase64.length !== 0"
                  :src="`data:image/png;base64,${verificationCodeImgBase64}`"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </van-dialog>

      <div class="login-container">
        <div class="login-wrapper">
          <!-- 手机号输入 -->
          <div class="phone-number-container">
            <div class="left-icon-container">
              <div class="icon-img"></div>
            </div>
            <div class="input-container">
              <input
                type="phone"
                class="phone-input"
                v-model="form.phone"
                placeholder="请输入手机号"
              />
            </div>
          </div>
          <!-- 图形验证码输入 （已迁移到modal）-->
          <!-- <div class="img-code-container">
            <div class="left-icon-container">
              <div class="icon-img"></div>
            </div>
            <div class="input-container">
              <input
                type="phone"
                class="verification-code-input"
                placeholder="请输入图形验证码"
                v-model="form.pngCode"
              />
              <div
                class="sent-verification-code-btn"
                @click="getVerificationCodeImg()"
              >
                <div class="btn-text">
                  <img
                    v-if="verificationCodeImgBase64.length !== 0"
                    :src="`data:image/png;base64,${verificationCodeImgBase64}`"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div> -->

          <!-- 验证码输入 -->
          <div class="verification-code-container">
            <div class="left-icon-container">
              <div class="icon-img"></div>
            </div>
            <div class="input-container">
              <input
                type="phone"
                class="verification-code-input"
                placeholder="请输入验证码"
                v-model="form.phone_code"
              />
              <div
                class="sent-verification-code-btn"
                @click="VerifyPhoneNumRight()"
              >
                <div class="btn-text">
                  {{
                    isSentVeriryMessage == false
                      ? '获取验证码'
                      : `${backWardTimeNum}s`
                  }}
                </div>
              </div>
            </div>
          </div>

          <!-- 按钮 -->
          <div class="login-btn-container">
            <div class="login-btn-wrapper" @click="login">
              <div class="login-btn-text">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JKNavigator from '@/components/common/jk-navigator/JKNavigator.vue';
import {
  sendPhoneVerificationCodeAPI,
  getVerificationCodeImgAPI,
  loginByPhoneAPI,
} from '@/api/login/login.js';

export default {
  name: 'companyProfile',
  components: {
    JKNavigator,
  },
  //变量区
  data() {
    return {
      // 是否点击发送了短信
      isSentVeriryMessage: false,
      // 倒数的时间
      backWardTimeNum: 60,
      // 用于还原倒数完毕后的时间
      backWardTimeNumInit: 60,
      //是否 在倒计时
      isBackWardTimeState: false,
      form: {
        phone: '',
        pngCode: '',
        phone_code: '',
      },
      verificationCodeImgBase64: '', //图形验证码转码后的文本base64信息，用于放在img里面
      showVerificationCodeModal: false, //是否打开图形验证码
    };
  },
  //生命周期区
  mounted() {
    // console.log(this.$store);
    // this.JKTest();
    // this.getVerificationCodeImg();
  },
  //方法区
  methods: {
    JKTest() {
      console.log('测试一下');
    },
    test(e) {
      console.log(e);
    },
    login() {
      console.log('点击');
      let phone = this.form.phone;
      let phoneCode = this.form.phone_code;

      if (phone.length > 0 && phoneCode.length > 0) {
        let payload = {
          phone: '',
          phone_code: '',
        };
        payload.phone = this.form.phone;
        payload.phone_code = this.form.phone_code;

        loginByPhoneAPI(this.form).then((res) => {
          //登录成功
          if (res.data.code == 0) {
            //   console.log(res);

            // 登录成功
            //   let successMsg = res.data.msg;
            //   console.log(successMsg);
            this.$toast({ message: '登录成功', duration: 1500 });
            this.$store.commit('changeIsMerchartLogin', true);
            this.$router.push('mine');
          } else {
            // 发送失败
            let errMsg = res.data.msg;
            console.log(errMsg);
            this.$toast({ message: errMsg, duration: 1500 });
          }
        });
      }

      //   this.$store.commit('changeIsMerchartLogin', true);
      //   this.$router.push('mine');

      //   console.log(this.form);
    },

    ////Model相关方法
    // 打开了Model层，刷新验证码
    openCodeModal() {
      console.log('model层被打开了');
      //刷新验证码
      this.getVerificationCodeImg();
    },

    ////发送手机号
    //获取图形验证码
    getVerificationCodeImg() {
      // 清空验证码的输入框
      //   this.form.pngCode = '';

      getVerificationCodeImgAPI().then((res) => {
        console.log(res);
        // btoa和atob是window的两个编码和解码函数，所以下面的方式就是把arraybuffer转成base64
        // btoa ：是binary to ascii，用于将binary的数据用ascii码表示，即Base64的编码过程
        //String.fromCharCode 就是把unicode 编码转成一个字符
        //将转成arraybuffer unicode 数组放到我们创建的数组中来，这一步实际上是新建数组
        let imgUint8Arry = new Uint8Array(res.data);
        //然后后面我们可以利用String.fromCharCode，把这个数组中的unicode 编码转成一个字符
        //这里的data实际代表着totol 而byte代表着currentValue
        //这个函数后面有个两个单引号代表着的是初始值
        let imgUint8ArryFormat = imgUint8Arry.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, '');
        //最后用btoa 将binary的数据用ascii码表示 就是转成了base64的格式
        let imgBase64 = btoa(imgUint8ArryFormat);
        this.verificationCodeImgBase64 = imgBase64;
        // console.log(imgBase64, 'base641233');
      });
    },

    //校验手机号是否合格,合格就打开验证框
    VerifyPhoneNumRight() {
      let mobileNum = this.form.phone;

      // 输入的字符串长度 不为 0
      if (mobileNum.length !== 0) {
        // judgePhoneNumIsRight子函数，用于判断手机号码是否是正确规格
        let isTelNumRight = this.judgePhoneNumIsRight(mobileNum);
        console.log(isTelNumRight);

        if (isTelNumRight) {
          console.log('符合规格');

          //向后端发送短信（子函数，内容在下面可以看到）
          let form = this.form;
          console.log(form);
          //   this.sendPhoneVerificationCode(form);

          //打开Modal框
          this.showVerificationCodeModal = true;
          //   this.getVerificationCodeImg();

          return;
        } else {
          console.log('不符合规格,请输入正确的手机号');
        }
      } else {
        console.log('手机号不能为空');
      }
    },
    //点击了Model的确认后
    //发送短信
    sendVerificationMessage() {
      let backWardTimeNum = this.backWardTimeNum;

      let form = this.form;
      console.log(form);
      sendPhoneVerificationCodeAPI(form).then((res) => {
        console.log(res);
        //成功发送
        if (res.data.code == 0) {
          //   console.log(res);

          // 发送成功
          //   let successMsg = res.data.msg;
          //   console.log(successMsg);
          this.$toast({ message: '短信发送成功', duration: 1500 });

          let isBackWardTimeState = this.isBackWardTimeState;
          // 如果没有在倒计时 就更改状态
          if (!isBackWardTimeState) {
            // 更改button状态
            this.changeIsSentVeriryMessageState();

            //开启倒计时
            this.startBackWardTimer(backWardTimeNum);
          } else {
            console.log('正在倒计时');
          }
        } else {
          // 发送失败
          let errMsg = res.data.msg;
          console.log(errMsg);
          this.$toast({ message: errMsg, duration: 1500 });
        }
      });
    },

    // 子函数
    // 发送短信篇
    // 判断手机号是否是正常格式,符合要求
    judgePhoneNumIsRight(mobileNum) {
      /**
       * 手机号码有11位 第一位必须是1 第二位必须是括号里面的数字
       * 手机号码正则表达式："^[1][3,5,7,8][0-9]\\d{8}$"
       * ^:正则开始
       * $:正则结束
       * [1]:手机号码第一个数必须为1
       * [3，5，7，8]:手机号码第二个数必须为:括号内数字
       * [0-9] \\d{8}：最后的数可以为0-9的任意数 :{8}:表示恰好9个  0-9 有9个
       * \：转换符
       * \d:表示前面的数为数字0-9
       * \d代表的意思是匹配数字
       * X{n}:恰好为n数  注意:从零开始
       */
      let telReg = new RegExp('^[1][3,5,7,8][0-9]\\d{8}$');
      let isTelNumRight = telReg.test(mobileNum);
      return isTelNumRight;
    },
    // 更改验证码按钮的状态
    changeIsSentVeriryMessageState() {
      let isSentVeriryMessage = !this.isSentVeriryMessage;
      this.isSentVeriryMessage = isSentVeriryMessage;
      console.log(this.isSentVeriryMessage);
    },
    // 倒计时
    startBackWardTimer(backWardTimeNum) {
      this.isBackWardTimeState = true;

      backWardTimeNum = backWardTimeNum - 1;
      let timer = null;
      timer = setTimeout(() => {
        this.backWardTimeNum = backWardTimeNum;
        let newBackWardTimeNum = this.backWardTimeNum;
        if (backWardTimeNum > 0) {
          this.startBackWardTimer(newBackWardTimeNum);
        } else {
          clearTimeout(timer);
          this.changeIsSentVeriryMessageState();
          this.isBackWardTimeState = false;
          this.backWardTimeNum = this.backWardTimeNumInit;
        }
      }, 1000);
    },
    //向后端请求发送短信(暂时废弃)
    // sendPhoneVerificationCode(data) {
    //   sendPhoneVerificationCodeAPI(data).then((res) => {
    //     console.log(res);
    //   });
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-wrapper {
  box-sizing: border-box;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  //   这里写75 的原因是用的是蓝湖的原型图，现在除以37.5 是因为用的是墨刀的原型图
  //   padding-bottom: calc(96.5 / 75) + rem;
  //   margin-bottom: calc(96.5 / 75) + rem;

  //   头部
  .header {
    position: relative;
    width: 100vw;
    height: calc(128 / 75) + rem;
    // 导航栏
    .total-nav-container {
      position: relative;
      display: flex;
      flex-direction: column;
      //   justify-content: center;
      // height: calc(44 / 75) + rem;

      .iphone-info-container {
        position: relative;
        width: 100vw;
        height: calc(22 / 75) + rem;
        font-size: calc(18 / 75) + rem;
      }
      .nav-container {
        position: relative;
        width: 100vw;
        height: calc(107 / 75) + rem;

        display: flex;
        flex-direction: row;
        align-items: flex-end;
        .nav-wrapper {
          position: relative;
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: calc(26 / 75) + rem;
          //   margin-left: calc(40.5 / 75) + rem;

          .nav-img-container {
            position: absolute;
            left: 0;
            top: 0;
            // margin-left: calc(20 / 37.5) + rem;
            height: calc(20 / 37.5) + rem;
            width: calc(20 / 37.5) + rem;
            margin-left: calc(41 / 75) + rem;
            // margin-right: calc(20 / 37.5) + rem;

            // margin-bottom: calc(27 / 75) + rem;

            .nav-img {
              background-image: url('@/assets/img/nav-left-arrow.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
              height: 100%;
              width: 100%;
            }
          }
          .nav-text-container {
            position: relative;
            display: flex;
            align-items: center;

            // margin-bottom: calc(27 / 75) + rem;
            font-size: calc(36 / 75) + rem;
            font-family: 'SourceHanSansCN-Medium';
            font-weight: 500;
            // font-size: 18px !important;
          }
        }
      }
    }
  }
  //内容
  .content {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: calc(1206 / 75) + rem;
    width: 100vw;
    justify-content: center;
    padding-bottom: calc(96.5 / 75) + rem;

    //图形验证码
    .img-code-container {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      height: calc(70 / 75) + rem;
      width: 100%;
      .left-icon-container {
        height: calc(45 / 75) + rem;
        width: calc(45 / 75) + rem;
        flex-shrink: 0;
        .icon-img {
          width: 100%;
          height: 100%;
          background-image: url(@/assets/img/img-code.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }

      .input-container {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 100%;
        .verification-code-input {
          width: 100%;
          height: 100%;
          font-size: calc(30 / 75) + rem;
        }
        .sent-verification-code-btn {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          border: calc(2 / 75) + rem solid #ee3c4c;
          border-radius: calc(30 / 75) + rem;
          .btn-text {
            font-size: calc(30 / 75) + rem;
            color: #ee3c4c;
            font-weight: bold;
          }
        }
      }
    }

    .login-container {
      position: relative;
      height: calc(400 / 75) + rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .login-wrapper {
        position: relative;
        height: 100%;
        width: 80%;
        background-color: white;
        border-radius: (20 / 75) + rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        // 手机号码
        .phone-number-container {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          height: calc(70 / 75) + rem;
          width: 100%;
          .left-icon-container {
            height: calc(45 / 75) + rem;
            width: calc(45 / 75) + rem;
            flex-shrink: 0;
            .icon-img {
              width: 100%;
              height: 100%;
              background-image: url(@/assets/img/phone-icon.png);
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }
          .input-container {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 80%;
            height: 100%;
            .phone-input {
              width: 100%;
              height: 100%;
              font-size: calc(30 / 75) + rem;
            }
          }
        }

        //验证码
        .verification-code-container {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          height: calc(70 / 75) + rem;
          width: 100%;
          .left-icon-container {
            height: calc(45 / 75) + rem;
            width: calc(45 / 75) + rem;
            flex-shrink: 0;
            .icon-img {
              width: 100%;
              height: 100%;
              background-image: url(@/assets/img/code-security.png);
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }

          .input-container {
            position: relative;
            display: flex;
            flex-direction: row;
            width: 80%;
            height: 100%;
            .verification-code-input {
              width: 100%;
              height: 100%;
              font-size: calc(30 / 75) + rem;
            }
            .sent-verification-code-btn {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              border: calc(2 / 75) + rem solid #ee3c4c;
              border-radius: calc(30 / 75) + rem;
              .btn-text {
                font-size: calc(30 / 75) + rem;
                color: #ee3c4c;
                font-weight: bold;
              }
            }
          }
        }

        .login-btn-container {
          position: relative;
          display: flex;
          justify-content: center;
          height: calc(70 / 75) + rem;
          width: 100%;
          .login-btn-wrapper {
            position: relative;
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ee3c4c;
            border-radius: calc(30 / 75) + rem;
            .login-btn-text {
              color: white;
              font-size: calc(40 / 75) + rem;
            }
          }
        }
      }
    }

    // background-image: url('@/assets/img/company-profile.png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    .company-profile-bcg-container {
      position: relative;
      box-sizing: border-box;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      background-image: url('@/assets/img/company-profile.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;

      padding-bottom: calc(96.5 / 75) + rem;
    }
  }
}
</style>
