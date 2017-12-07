const sleep = {
  description: 'sleep',
  do: function(state) {
    return state.increaseEnergy(3, 6)
  },
}

export default sleep
