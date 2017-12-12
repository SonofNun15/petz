const sleep = {
  description: 'sleep',
  do: function(state) {
    return state.increaseEnergy(4, 6)
  },
}

export default sleep
