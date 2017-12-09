import { decrease, increase } from '../services/levelAdjuster'

class State {
  constructor(state, adjustments) {
    if (!state) { state = start_state() }

    Object.assign(state, adjustments)

    this.food = state.food
    this.energy = state.energy
    this.happiness = state.happiness
    this.experience = state.experience
    this.health = state.health
    this.weight = state.weight

    this.level = state.level
  }

  increaseHealth(min, max) {
    return new State(this, { health: increase(this.health, 12, min, max) })
  }

  decreaseHealth(min, max) {
    return new State(this, { health: decrease(this.health, min, max) })
  }

  increaseHappiness(min, max) {
    return new State(this, { happiness: increase(this.happiness, 15, min, max) })
  }

  decreaseHappiness(min, max) {
    return new State(this, { happiness: decrease(this.happiness, min, max) })
  }

  increaseFood(min, max) {
    return new State(this, { food: increase(this.food, 15, min, max) })
  }

  decreaseFood(min, max) {
    return new State(this, { food: decrease(this.food, min, max) })
  }

  increaseEnergy(min, max) {
    return new State(this, { energy: increase(this.energy, 15, min, max) })
  }

  decreaseEnergy(min, max) {
    return new State(this, { energy: decrease(this.energy, min, max) })
  }

  increaseWeight(min, max) {
    return new State(this, { weight: increase(this.weight, 15, min, max) })
  }

  decreaseWeight(min, max) {
    return new State(this, { weight: decrease(this.weight, min, max) })
  }

  adjustWeight(amount) {
    return new State(this, { weight: amount })
  }

  increaseExperience(min, max) {
    return new State(this, {
      experience: increase(this.experience, Number.POSITIVE_INFINITY, min, max)
    })
  }

  decreaseExperience(min, max) {
    return new State(this, {
      experience: decrease(this.experience, min, max)
    })
  }

  currentLevel(level) {
    return new State(this, { level: Math.max(this.level, level) })
  }
}

function start_state() {
  return {
    food: 5,
    energy: 5,
    happiness: 5,
    experience: 5,
    health: 5,
    weight: 5,
    level: 1,
  }
}

export default State
