import random from '../services/randomizer'

const walk = {
  description: 'walk',
  do: function(state) {
    const requiredEnergy = random(1, 2)

    if (requiredEnergy > state.energy) {
      console.log('Too tired to walk...')
      return state
    }

    return state.decreaseEnergy(requiredEnergy)
                .increaseHappiness(2, 3)
                .increaseExperience(1, 2)
  },
}

export default walk
