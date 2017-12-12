import random from '../services/randomizer'

const play = {
  description: 'play',
  do: function(state) {
    const requiredEnergy = random(1, 2)

    if (requiredEnergy > state.energy) {
      console.log('Too tired to play...')
      return state
    }

    return state.increaseHappiness(3, 6)
                .decreaseEnergy(requiredEnergy)
  },
}

export default play

