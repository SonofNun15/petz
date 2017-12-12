const minHealthyHappiness = 3

const drudgery = {
  description: 'drudgery',
  do: function(state) {
    const changedState = state.decreaseHealth(healthEffect(state))
    return changedState.decreaseHappiness(0, 2)
  },
}

function healthEffect(state) {
  return Math.max(
    0,
    minHealthyHappiness - state.happiness,
  )
}

export default drudgery
