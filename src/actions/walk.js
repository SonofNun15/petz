const walk = {
  description: 'walk',
  do: function(state) {
    return state.decreaseEnergy(1, 2)
                .increaseHappiness(1, 3)
                .increaseExperience(0, 2)
  },
}

export default walk
