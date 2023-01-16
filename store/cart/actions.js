const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/cart/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/cart/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/cart/"
        );
        commit("SET_EVENT", response);
        return ''
      },
  };
  
  export default actions;
  