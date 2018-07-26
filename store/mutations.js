export default {
  toggle(state, key) {
    state[key] = !state[key]
  },
  setApiURI(state, apiURI) {
    state.apiURI = apiURI
  },
  setContentOne(state, contentOne) {
    state.contentOne.likes = contentOne.likes
    state.contentOne.id = contentOne.id
    state.contentOne.views = contentOne.clicks
  }
}
