const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/product/",
        data
      );
    //   response.data
      return response
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/product/${data.get('id')}/`,
        data
      );
      return response
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/product/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  