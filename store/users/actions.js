const actions = {
  async addUser({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$post(
      "/signup/",
      customer
    );
    response.customer = customer;
  },
  async editUser({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$put(
      `/users/${customer.id}/`,
      customer
    );
    response.customer = customer;
  },
  async view({ commit }, ) {
    const response = await this.$axios.$get(
      "/users/"
    );
    commit("SET_USER", response);
  },
  async quote({ commit }, register ) {
    const response = await this.$axios.$post(
      "/quote/",
      register
    );
    commit("SET_USER", response);
  },
  async reset_password({ commit }, register ) {
    alert(register.email)
    const response = await this.$axios.$post(
      "/reset-password/",
      register
    );
    commit("SET_USER", response);
  },
};

export default actions;
