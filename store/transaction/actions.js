const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/transaction/",
        data
      );
      response.data = data;
    },
    async bulk({ commit },  data ) {
      const response = await this.$axios.$post(
        "/transaction/bulk/",
        data
      );
      response.data = data;
    },
    async notify({ commit },  data ) {
      const response = await this.$axios.$post(
        "/notif/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/transaction/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/transaction/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  