export default {
  state() {
    return {
      lang: "ar"
    };
  },
  getters: {
    lang: state => state.lang
  },
  mutations: {
    toggleLang(state) {
      state.lang == "ar" ? (state.lang = "en") : (state.lang = "ar");
    }
  },
  actions: {
    toggleLang({ commit }) {
      commit("toggleLang");
    }
  }
};
