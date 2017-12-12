import random from '../services/randomizer'

const train = {
  description: 'train',
  do: function(state) {
    const requiredEnergy = random(2, 3)

    if (requiredEnergy > state.energy) {
      console.log('Too tired to train...')
      return state
    }

    return state.decreaseEnergy(requiredEnergy)
                .increaseExperience(1, 4)
                .decreaseHappiness(0, 2)
  },
}

export default train
