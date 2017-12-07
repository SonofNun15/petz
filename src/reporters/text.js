import Pet from '../models/pet'
import io from '../io'

export function report(pet, day) {
  console.log(`***** DAY ${day} *****`)
  console.log(`${pet.name} wakes up`)
  const state = pet.state
  console.log(`happiness = ${state.happiness}`)
  console.log(`food = ${state.food}`)
  console.log(`energy = ${state.energy}`)
  console.log(`health = ${state.health}`)
  console.log(`weight = ${state.weight}`)
  console.log(`experience = ${state.experience}`)
}

export async function selectAction(actions) {
  let actionList = actions.map((a, index) => ` ${index + 1}: ${a.description}`)
  actionList.push(" 'q' or other to quit")
  actionList.push(' > ')
  const actionText = actionList.join('\n')
  const answer = await io.question(actionText)
  const index = parseInt(answer) - 1
  return actions[index]
}
