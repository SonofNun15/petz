const level = {
  description: 'level',
  do: function(state) {
    let petValue = 0
    petValue += state.experience * 3
    petValue += state.happiness * 2
    petValue += Math.min(state.energy, 10)
    petValue += Math.min(state.food, 10)
    const baseLine = petValue - 35
    const level = Math.floor(Math.sqrt(petValue))
    return state.currentLevel(level)
  }
}

export default level
