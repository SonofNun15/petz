import io from './io'
import Pet from './models/pet'
import { report, selectAction } from './reporters/text'

async function run(pet) {
  let day = 1

  while (pet.continue) {
    report(pet, day)

    let action = null

    while (!action) {
      console.log(`What do you want to do with ${pet.name} today? `)
      action = await selectAction(pet.actions)

      if (!action) {
        console.log('You did not select an action! Try again.')
      }
    }

    action.do()
    day++
  }

  report(pet, day)

  console.log('I hope you had fun!')
  io.close()
}

export default run
