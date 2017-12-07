import { decrease, increase } from '../services/levelAdjuster'

class State {
  constructor(state) {
    if (!state) { state = start_state() }

    this.food = state.food
    this.energy = state.energy
    this.happiness = state.happiness
    this.experience = state.experience
    this.health = state.health
    this.weight = state.weight

    this.level = state.level
  }

  increaseHealth(min, max) {
    this.health = increase(this.health, 12, min, max)
    return this
  }

  descreaseHealth(min, max) {
    this.health = decrease(this.health, min, max)
    return this
  }

  increaseHappiness(min, max) {
    this.happiness = increase(this.happiness, 15, min, max)
    return this
  }

  decreaseHappiness(min, max) {
    this.happiness = decrease(this.happiness, min, max)
    return this
  }

  increaseFood(min, max) {
    this.food = increase(this.food, 15, min, max)
    return this
  }

  descreaseFood(min, max) {
    this.food = decrease(this.food, min, max)
    return this
  }

  increaseEnergy(min, max) {
    this.energy = increase(this.energy, 15, min, max)
    return this
  }

  decreaseEnergy(min, max) {
    this.energy = decrease(this.energy, min, max)
    return this
  }

  increaseExperience(min, max) {
    this.experience = increase(this.experience, Number.POSITIVE_INFINITY, min, max)
    return this
  }

  decreaseExperience(min, max) {
    this.experience = decrease(this.experience, min, max)
    return this
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
