const goToVet = {
  description: 'go to vet',
  do: function(state) {
    return state.decreaseHappiness(3, 5)
                .increaseHealth(3, 5)
                .decreaseEnergy(1, 2)
  },
}

export default goToVet
