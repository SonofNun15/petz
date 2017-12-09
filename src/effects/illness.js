import random from '../services/randomizer'

const illness  = {
  description: 'illness ',
  do: function(state) {
    const illness = random(1, 5)
    const illnessEffect = illness > 3
      ? illness - 1
      : 0

    return state.decreaseHealth(illnessEffect)
  }
}

export default illness
