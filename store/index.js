export const state = () => ({
    authenticated : false
  })

  export const mutations = {
    connection(state) {
      state.authenticated = true
    }
  }