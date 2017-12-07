const train = {
  description: 'train',
  do: function(state) {
    return state.decreaseEnergy(2, 4)
                .increaseExperience(1, 4)
                .decreaseHappiness(0, 2)
  },
}

export default train
