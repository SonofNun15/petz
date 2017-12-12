import random from '../services/randomizer'

const illness  = {
  description: 'illness ',
  do: function(state) {
    if (getsIll()) {
      return state.decreaseHealth(random(1, 3))
    }

    return state
  }
}

function getsIll() {
  return random(1, 5) == 1
}

export default illness
