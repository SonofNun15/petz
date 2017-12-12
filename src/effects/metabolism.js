const minHealthyFood = 5
const minHealthyWeight = 4
const maxHealthyWeight = 12

const metabolism  = {
  description: 'metabolism ',
  do: function(state) {
    let changedState = state.decreaseHealth(healthEffect(state))
    changedState = changedState.decreaseFood(1, 3)
    return changedState.adjustWeight(weightEffect(changedState))
  }
}

function weightEffect(state) {
  return Math.floor(
    Math.max(0, state.food - minHealthyFood) / 2
  )
}

function healthEffect(state) {
  return Math.max(
    0,
    state.health - maxHealthyWeight,
    minHealthyWeight - state.weight,
  )
}

export default metabolism
