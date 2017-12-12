const play = {
  description: 'play',
  do: function(state) {
    return state.increaseHappiness(3, 5)
                .decreaseEnergy(1, 3)
  },
}

export default play

