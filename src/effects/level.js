const level = {
  description: 'level',
  do: function(state) {
    let petValue = 0
    petValue += state.experience * 3
    petValue += state.happiness * 2
    petValue += Math.min(state.energy, 10)
    petValue += Math.min(state.food, 10)

    const baseline = petValue - 23
    if (baseline <= 0) {
      return state
    }

    const level = Math.floor(Math.sqrt(baseline))
    return state.currentLevel(level)
  }
}

export default level
