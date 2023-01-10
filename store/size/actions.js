const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/size/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/size/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/size/"
        );
        commit("SET_EVENT", response);
      },
      async sizeProductID({ commit }, data) {
        const response = await this.$axios.$post(
          "/size-by-product_id/",
          data
        );
        commit("SET_EVENT", response);
      },
      
  };
  
  export default actions;
  