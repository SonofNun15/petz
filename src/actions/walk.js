const walk = {
  description: 'walk',
  do: function(state) {
    return state.decreaseEnergy(1, 2)
                .increaseHappiness(2, 3)
                .increaseExperience(1, 2)
  },
}

export default walk
