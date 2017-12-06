import random from '../services/randomizer'

class Pet {
  constructor(name) {
    this.name = name
    this.continue = true
    this.alive = true

    this.food = 5
    this.energy = 5
    this.happiness = 5
    this.experience = 5
    this.health = 5
    this.weight = 5

    this.level = 0
    this.actions = [
      {
        description: 'play',
        do: () => {
          this.play()
        },
      },
      {
        description: 'feed',
        do: () => {
          this.feed()
        },
      },
      {
        description: 'walk',
        do: () => {
          this.walk()
        },
      },
      {
        description: 'train',
        do: () => {
          this.train()
        },
      },
      {
        description: 'sleep',
        do: () => {
          this.sleep()
        },
      },
      {
        description: 'go to vet',
        do: () => {
          this.goToVet()
        },
      },
      {
        description: 'nothing',
        do: () => { },
      },
      {
        description: 'quit',
        do: () => {
          this.quit()
        },
      },
    ]
  }

  do(action) {
    action.do()
    this.age()
  }

  play() {
    this.happiness += random(4, 8)
    this.energy -= random(2, 5)
  }

  feed() {
    this.food += random(4, 8)
  }

  walk() {
    this.energy -= random(2, 4)
    this.happiness += random(3, 5)
    this.experience += random(0, 2)
  }

  train() {
    this.energy -= random(4, 8)
    this.experience += random(2, 5)
    this.happiness -= random(1, 4)
  }

  goToVet() {
    this.happiness -= random(5, 8)
    this.health += random(4, 8)
    this.energy -= random(1, 2)
  }

  sleep() {
    this.energy += random(4, 8)
    this.age()
  }

  age() {
    this.food -= random(3, 5)
    this.adjustWeight()

    if (this.weight < 4) {
      this.health -= random(1, 3)
    }

    this.happiness -= 0.5

    if (this.happiness <= 2) {
      this.health -= random (0, 2)
    }

    this.energy += random (0, 2)

    if (this.energy < 3) {
      this.health -= random(1, 4)
    }

    if (this.health <= 0) {
      this.alive = false
    }

    if (this.getsSick()) {
      this.health -= random(3, 5)
    }

    this.maybeLevelUp()
  }

  maybeLevelUp() {
    let petValue = 0
    petValue += this.experience * 3
    petValue += this.happiness * 2
    petValue += Math.min(this.energy, 10)
    petValue += Math.min(this.food, 10)
  }

  getsSick() {
    return random(1, 5) == 5
  }

  adjustWeight() {
    if (this.food >= 5) {
      this.weight += 1
    } else if (this.food < 3) {
      this.weight -= 0.5
    }
  }

  quit() {
    this.continue = false
  }
}

export default Pet
