import State from './state'

class Pet {
  constructor(name) {
    this.name = name
    this.alive = true

    this.state = new State()
  }

  do(action) {
    let newState = new State(this.state)
    this.state = action.do(newState)
  }

  // age() {
  //   this.food -= random(3, 5)
  //   this.adjustWeight()

  //   if (this.weight < 4) {
  //     this.health -= random(1, 3)
  //   }

  //   this.happiness -= 0.5

  //   if (this.happiness <= 2) {
  //     this.health -= random (0, 2)
  //   }

  //   this.energy += random (0, 2)

  //   if (this.energy < 3) {
  //     this.health -= random(1, 4)
  //   }

  //   if (this.health <= 0) {
  //     this.alive = false
  //   }

  //   if (this.getsSick()) {
  //     this.health -= random(3, 5)
  //   }

  //   this.maybeLevelUp()
  // }

  // maybeLevelUp() {
  //   let petValue = 0
  //   petValue += this.experience * 3
  //   petValue += this.happiness * 2
  //   petValue += Math.min(this.energy, 10)
  //   petValue += Math.min(this.food, 10)
  // }

  // getsSick() {
  //   return random(1, 5) == 5
  // }

  // adjustWeight() {
  //   if (this.food >= 5) {
  //     this.weight += 1
  //   } else if (this.food < 3) {
  //     this.weight -= 0.5
  //   }
  // }
}

export default Pet
