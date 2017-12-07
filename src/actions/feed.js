const feed = {
  description: 'feed',
  do: function(state) {
    return state.increaseFood(3, 5)
  },
}

export default feed
