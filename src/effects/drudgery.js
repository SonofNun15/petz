const minHealthyHappiness = 4
const drudgery = {
  description: 'drudgery',
  do: function(state) {
    const changedState = state.decreaseHappiness(0, 2)
    const healthEffect = Math.max(0, minHealthyHappiness - changedState.happiness)
    return changedState.decreaseHealth(healthEffect)
  },
}

export default drudgery
