const goToVet = {
  description: 'go to vet',
  do: function(state) {
    return state.decreaseHappiness(2, 4)
                .increaseHealth(3, 5)
                .decreaseEnergy(1, 2)
  },
}

export default goToVet
