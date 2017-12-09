import io from './io'
import Pet from './models/pet'
import actions from './actions'
import { report, selectAction } from './reporters/text'

async function run(pet) {
  let day = 1
  let play = true

  while (play && pet.alive) {
    report(pet, day)

    let action = null

    while (!action) {
      console.log(`What do you want to do with ${pet.name} today? `)
      action = await selectAction(actions)

      if (!action) {
        console.log('Are you sure you want to quit (y/n)? ')
        let quit = await io.question(' > ')
        quit = quit.toLowerCase()

        if (quit == 'y') {
          play = false
          break
        }
      }
    }

    if (action) {
      pet.do(action)
      pet.age()
      day++
    }
  }

  report(pet, day)

  console.log('I hope you had fun!')
  io.close()
}

export default run
