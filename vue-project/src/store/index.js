import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state() {
    return{
      role: null,
      order: "",
      user: null
    }
  },
  getters: {
    getRole: state => state.role,
    getOrder: state => state.order,
    isAdmin: state => {
      return state.user && state.user.role === 'admin';
    },
  },
  mutations: {
    setOrder(state, {order}) {
      state.order = order;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setOrder({ commit }, order) {
      console.log(order);
      commit('setOrder', order); 
    }
  },
  modules: {
  }
})