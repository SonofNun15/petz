class Pet {
  constructor(name) {
    this.name = name
    this.continue = true
    this.alive = true

    this.actions = [
      {
        description: 'play',
        do: () => {
          this.play()
        },
      },
      {
        description: 'sleep',
        do: () => {
          this.sleep()
        },
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
  }

  play() {

  }

  sleep() {

  }

  quit() {
    this.continue = false
  }
}

export default Pet
