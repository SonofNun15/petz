const minHealthyFood = 5
const minHealthyWeight = 4
const maxHealthyWeight = 12

const metabolism  = {
  description: 'metabolism ',
  do: function(state) {
    let changedState = state.decreaseFood(1, 3)
    changedState = changedState.adjustWeight(weightEffect(changedState))

    return changedState.decreaseHealth(healthEffect(changedState))
  }
}

function weightEffect(state) {
  return Math.floor(
    Math.max(0, minHealthyFood - state.food) / 2
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
