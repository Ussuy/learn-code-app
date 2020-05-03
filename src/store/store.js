import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ui: {
      menu: false
    }
  },
  mutations: {
    show_menu (state, value) {
      state.ui.menu = value
    },
    hide_menu (state, value) {
      state.ui.menu = value
    }
  },
  actions: {
    showMenu({commit}) {
      commit('show_menu', true)
    },

    hideMenu({commit}) {
      commit('hide_menu', false)
    }
  }
})

export default store
