const actions = {
  async add({ commit },  data ) {
    const response = await this.$axios.$post(
      "/quote/",
      data
    );
    response.data = data;
  },
  async inquiry({ commit },  data ) {
    const response = await this.$axios.$post(
      "/quote/inquiry/",
      data
    );
    response.data = data;
  },
  async edit({ commit },  data ) {
    const response = await this.$axios.$put(
      `/quote/${data.id}/`,
      data
    );
    response.data = data;
  },
  async view({ commit }, ) {
      const response = await this.$axios.$get(
        "/quote/"
      );
      commit("SET_EVENT", response);
    },
};

export default actions;
