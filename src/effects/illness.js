import random from '../services/randomizer'
import { watch } from 'fs';

const illness  = {
  description: 'illness ',
  do: function(state) {
    if (getsIll(state)) {
      return state.decreaseHealth(random(1, 3))
    }

    return state
  }
}

const minHealthyEnergy = 3
function getsIll(state) {
  const illnessProbability = Math.max(
    1,
    minHealthyEnergy - state.energy,
  )
  return random(1, 5) == 1
}

export default illness
