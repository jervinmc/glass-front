const mutations = {
    ADD_USER: (state, payload) => {
      state.customers.unshift(payload);
    },
    SET_USER: (state, payload) => {
      state.users = payload
    },
  };
  
  export default mutations;
  