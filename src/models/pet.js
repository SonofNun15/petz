import State from './state'
import effects from '../effects'
import { watch } from 'fs';

class Pet {
  constructor(name) {
    this.name = name
    this.alive = true

    this.state = new State()
  }

  do(action) {
    this.state = action.do(this.state)
  }

  age() {
    effects.forEach(effect => {
      this.state = effect.do(this.state)
    })

    if (this.state.health <= 0) {
      this.alive = false
    }
  }
}

export default Pet
