const state = {
    role: null,
  };
  
  const mutations = {
    setRole(state, newRole) {
        state.role = newRole;
      },
  };
  
  const actions = {
  };
  
  const getters = {
    getRole: state => state.role,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };