const play = {
  description: 'play',
  do: function(state) {
    return state.increaseHappiness(2, 5)
                .decreaseEnergy(1, 4)
  },
}

export default play

