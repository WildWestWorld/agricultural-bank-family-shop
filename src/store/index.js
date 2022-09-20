import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)

// 用来存储数据
const state = {
    test: "123"
}
// 响应组件中的事件
const actions = {
    // navToPage (path) {
    //     console.log(path)
    //     router.push('/' + path);
    // },
}
// 操作数据
const mutations = {

}
// 用来将state数据进行加工
const getters = {

}
// 新建并暴露store
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
